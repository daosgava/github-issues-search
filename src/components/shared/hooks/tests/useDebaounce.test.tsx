import useDebounce from '../useDebounce';
import { renderHook } from '@testing-library/react-hooks'

const delay = 500;

test('useDebounce should return a string', () => {
  const debouncedSearchTerm = renderHook(() => useDebounce('keyword', delay));

  expect(typeof debouncedSearchTerm.result.current).toBe('string');
});

test('useDebounce should delay the updates', async () => {

  let keyword = 'bug';
  const { result, rerender, waitForNextUpdate } = renderHook(() => useDebounce(keyword, delay));

  keyword = 'async';
  rerender();

  expect(result.current).toBe('bug');
  await waitForNextUpdate();
  expect(result.current).toBe('async');
});