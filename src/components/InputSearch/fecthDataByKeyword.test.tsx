import fecthDataByKeyword, { setQuery, callGithubApi } from './fecthDataByKeyword';

jest.mock('axios', () => {
  return {
    post: () => Promise.resolve({
      data: {
        data: {
          search: {
            edges: [],
          }
        },
      },
    }),
  }
});

test('fecthDataByKeyword should return results', async () => {
  const results = await fecthDataByKeyword('bug', 10);
  expect(Array.isArray(results)).toBeTruthy();
});

test('setQuery should return a query string', () => {
  const result = setQuery('repo:facebook/react is:issue bug', 10);
  expect(typeof result).toBe('string');
});

test('setQuery should return a query string', async () => {
  const result = await callGithubApi('bug', 10);
  expect(typeof result).toBe('object');
});

