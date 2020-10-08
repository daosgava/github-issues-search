import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import InputSearch from '../index';

const setup = () => {
  const utils = render(<InputSearch />);
  const input = utils.getByPlaceholderText('Search for an issue') as HTMLInputElement;
  return {
    input,
    ...utils,
  }
};

test('InputSearch should match the snapshot', async () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();

  await act(() => Promise.resolve());
});

test('Input value should change', async () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'bug' } });
  expect(input.value).toBe('bug');

  fireEvent.change(input, { target: { value: 'async' } });
  expect(input.value).toBe('async');

  await act(() => Promise.resolve());
});

