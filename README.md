# Github issues search

This is an exercise for requesting issues from the github Facebook/react repo using the GitHub GraphQL API V4, by typing a keyword in the search input field and it will show the results in an autocomplete input box.

![Github issues search UI](https://github.com/daosgava/github-issues-search/blob/main/docs/ui-search-issue.png)


## Running the App

In order to run the app you need to set up a secrets folder with an API token

```
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Useful links

Get your Personal access token [PAT guide](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) 

## Set up you secrets folder

For this exercise the token needs to be included in src/components/shared/secrets as a JSON file</br>

- Path: src/components/shared/secrets/token.json

JSON file Example:
```
  {
    "github": "__YOUR_TOKEN"
  } 
```
