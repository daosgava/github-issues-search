import getGithubToken from './getGithubToken';

test('renders learn react link', () => {
  const token = getGithubToken();
  expect(typeof token).toBe('string');
});