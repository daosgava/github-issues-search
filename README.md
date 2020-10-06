# Github issues search

This is an exercise for requesting issues from the github Facebook/react repo using the GitHub GraphQL API V4.

![Github issues search UI](https://github.com/daosgava/github-issues-search/blob/main/docs/ui-search-issue.png)


## Running the App

In order to run the app you need to set up a secrets folder with an API token.

```
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Useful links

Get your Personal access token [PAT guide](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) 

## Get Personal Access Token

- 1. In the upper-right corner of any page, click your profile photo, and then click Settings
- 2. In the left sidebar, click Developer settings.
- 3. In the left sidebar, click Personal access tokens.
- 4. Click Generate new token.
- 5. Give your token a descriptive name
- 6. Select the following options
```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```
- 7. Click Generate token.
- 8. Click  to copy the token to your clipboard. For security reasons, after you navigate off the page, you will not be able to see the token again.

## Set up you secrets folder

For this exercise the token needs to be included in src/components/shared/secrets as a JSON file.</br>

- Path: src/components/shared/secrets/token.json

JSON file Example:
```
  {
    "github": "__YOUR_TOKEN"
  } 
```
