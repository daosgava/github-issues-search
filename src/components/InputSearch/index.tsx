import React, { ReactElement, useCallback, useState } from 'react';
import { node } from '../shared/types';
import CustomInput from './CustomInput';
import IssuesBox from './IssuesBox';
import { useDebounce, useFecthDataByKeyword } from '../shared/hooks';

const InputSearch = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('');
  const [cursor, setCursor] = useState<number>(0);
  const numberOfResults = 10;
  const debouncedSearchTerm = useDebounce(inputValue, 500);
  const issues: node[] = useFecthDataByKeyword(debouncedSearchTerm, numberOfResults);

  const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent): void => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }

    if (e.key === 'ArrowUp' && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.key === 'ArrowDown' && cursor < numberOfResults - 1) {
      setCursor(cursor + 1);
    } else if (e.key === 'Enter') {
      window.location.assign(issues[cursor].node.url);
    }
  }, [cursor, issues]);

  return (
    <>
      <CustomInput
        inputValue={inputValue}
        handleOnChange={handleOnChange}
        handleKeyDown={handleKeyDown}
      />
      <IssuesBox issues={issues} cursor={cursor} />
    </>
  );
};

export default InputSearch;
