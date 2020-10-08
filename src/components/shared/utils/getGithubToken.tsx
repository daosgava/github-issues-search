import token from '../secrets/token.json';

/*
  TODO: Handle secrets with a vault
  For this exercise the secret needs to be included in secrets/token.json
  
  example:
  {
    "github": "__YOUR_TOKEN__"
  }
*/

const getGithubToken = (): string => {
  let apiToken: string;

  try {
    apiToken = token.github;
  } catch (e) {
    console.log(e);
    apiToken = '';
  }

  return apiToken;
}

export default getGithubToken;
