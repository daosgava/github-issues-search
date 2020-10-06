import React from 'react';
import { act, render } from '@testing-library/react';
import InputSearchContainer from '../index';

test('renders learn react link', async () => {
  const { container } = render(<InputSearchContainer />);
  expect(container).toMatchSnapshot(`<>
    <InputContainer
      inputValue={inputValue}
      handleOnChange={handleOnChange}
      handleKeyDown={handleKeyDown}
    />
    <IssuesBox issues={issues} cursor={cursor} />
  </>`);

  await act(() => Promise.resolve());
});

