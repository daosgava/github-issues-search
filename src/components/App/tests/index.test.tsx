import React from 'react';
import { act, render } from '@testing-library/react';
import App from '../index';

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Issues/i);
  expect(linkElement).toBeInTheDocument();
  await act(() => Promise.resolve());
});

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Issues/i);

  expect(linkElement).toMatchSnapshot(`<h1>Issues · facebook/react · GitHub 🤓</h1>`);
  await act(() => Promise.resolve());
});
