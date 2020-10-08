import useDebounce from '../useDebounce';
import { renderHook } from '@testing-library/react-hooks'

test('useDebounce should return a string', () => {
  const delay = 500;
  const debouncedSearchTerm = renderHook(() => useDebounce('keyword', delay));

  expect(typeof debouncedSearchTerm.result.current).toBe('string');
});