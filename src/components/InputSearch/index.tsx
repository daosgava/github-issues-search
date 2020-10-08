import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import fecthDataByKeyword from './fecthDataByKeyword';
import { node } from '../shared/types';
import InputContainer from './InputContainer';
import IssuesBox from './IssuesBox';
import { useDebounce } from '../shared/hooks';

const InputSearchContainer = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('');
  const [cursor, setCursor] = useState<number>(0);
  const numberOfResults = 10;
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  const [issues, setIssues] = useState<node[]>([]);
  useEffect(() => {
    let isSubscribed = true

    if (debouncedSearchTerm) {
      const getData = async () => {
        const res: node[] = await fecthDataByKeyword(debouncedSearchTerm, numberOfResults);
        if (isSubscribed) {
          setIssues([...res]);
        }
      };
      getData();
    } else {
      setIssues([]);
    }

    return () => {
      isSubscribed = false;
    };
  }, [debouncedSearchTerm]);

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
      <InputContainer
        inputValue={inputValue}
        handleOnChange={handleOnChange}
        handleKeyDown={handleKeyDown}
      />
      <IssuesBox issues={issues} cursor={cursor} />
    </>
  );
};

export default InputSearchContainer;