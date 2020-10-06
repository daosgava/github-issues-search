
import { node } from '../shared/types';
import axios from 'axios';
import { getGithubToken } from '../shared/utils';

const bearerToken = `bearer ${getGithubToken()}`;
// TODO: move routes to a config file
const endPoint = 'https://api.github.com/graphql';

const setQuery = (query: string, numberOfResults: number): string => (
  JSON.stringify({
    query:
      `query FindIssues {
      search(query: "${query}", type: ISSUE, first: ${numberOfResults}){
        issueCount
        edges{
          node{
            ... on Issue{
              id
              title
              url
            }
          }
        }
      }
    }`
  })
);

const fecthDataByKeyword = async (keyword: string, numberOfResults: number): Promise<node[]> => {
  if (!bearerToken) {
    throw new Error('Token not defined!');
  }

  if (!keyword) {
    return [];
  }

  try {
    const { data }: any = await axios.post(
      endPoint,
      setQuery(`repo:facebook/react is:issue ${keyword}`, numberOfResults),
      {
        headers: {
          Authorization: bearerToken,
        },
      },
    );

    return data.data.search.edges;
  } catch (e) {
    /*
      Log the error coming from the API
      but we don't break the page
    */
    console.log(e);

    return [];
  }
};

export default fecthDataByKeyword;
