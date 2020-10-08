import useFetchDataByKeyword from '../useFetchDataByKeyword';
import { renderHook } from '@testing-library/react-hooks'

const mockData = [
  {
    node: {
      id: 'MDU6SXNzdWU3MTA3MTIxOTE=',
      title: 'Bug: shallowEqual() is flawed',
      url: 'https://github.com/facebook/react/issues/19921'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MDQyMjUzNTI=',
      title: 'Bug: React Portals - Memory Leak',
      url: 'https://github.com/facebook/react/issues/19857'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU2OTY5NDEyNjk=',
      title: 'Bug: Memory leakage with setInterval',
      url: 'https://github.com/facebook/react/issues/19800'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MDgxNjQyNzk=',
      title: 'Bug: Cannot npm-link other project',
      url: 'https://github.com/facebook/react/issues/19898'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MDkxODkyMTA=',
      title: 'Bug: devtools Profiler causes unexpected errors',
      url: 'https://github.com/facebook/react/issues/19911'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MDc2NDk1NDA=',
      title: 'Bug: onBlur events not called when autofilled',
      url: 'https://github.com/facebook/react/issues/19896'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MDQzNzcyMzY=',
      title: 'Bug: input[type="radio"] cannot be readOnly',
      url: 'https://github.com/facebook/react/issues/19860'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU2NzM3Mzg5OTA=',
      title: 'Bug: Crash after update',
      url: 'https://github.com/facebook/react/issues/19539'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MTU2MjM0NDA=',
      title: 'Bug: Fast memory leaks on simple React App',
      url: 'https://github.com/facebook/react/issues/19968'
    }
  },
  {
    node: {
      id: 'MDU6SXNzdWU3MTQwMDI0MTQ=',
      title: 'Bug: v17 DEV mode slowness during effect traversal',
      url: 'https://github.com/facebook/react/issues/19950'
    }
  }
];

test('useFetchDataByKeyword should return an array', async () => {
  const { result } = renderHook(() => useFetchDataByKeyword('bug', 10));
  expect(Array.isArray(result.current)).toBeTruthy();
});

test('useFetchDataByKeyword should return results', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchDataByKeyword('bug', 10));
  await waitForNextUpdate();
  expect(result.current).toEqual(mockData);
})