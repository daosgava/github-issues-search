import React from 'react';
import { act, render } from '@testing-library/react';
import InputSearch from '../index';

test('renders learn react link', async () => {
  const { container } = render(<InputSearch />);
  expect(container).toMatchSnapshot();

  await act(() => Promise.resolve());
});

