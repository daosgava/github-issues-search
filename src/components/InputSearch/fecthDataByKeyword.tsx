import { node } from '../shared/types';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { getGithubToken } from '../shared/utils';

const bearerToken = `bearer ${getGithubToken()}`;
// TODO: move routes to a config file
const endPoint = 'https://api.github.com/graphql';

export const setQuery = (query: string, numberOfResults: number): string => (
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

export const callGithubApi = (keyword: string, numberOfResults: number): Promise<AxiosPromise> => axios.post(
  endPoint,
  setQuery(`repo:facebook/react is:issue ${keyword}`, numberOfResults),
  {
    headers: {
      Authorization: bearerToken,
    },
  },
);

export const fecthDataByKeyword = async (keyword: string, numberOfResults: number): Promise<node[]> => {
  if (!bearerToken) {
    throw new Error('Token not defined!');
  }

  if (!keyword) {
    return [];
  }

  try {
    const { data }: AxiosResponse = await callGithubApi(keyword, numberOfResults);
    return data.data.search.edges;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default fecthDataByKeyword;
