import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import fecthDataByKeyword from './fecthDataByKeyword';
import { node } from '../shared/types';
import InputContainer from './InputContainer';
import IssuesBox from './IssuesBox';

const InputSearchContainer = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [cursor, setCursor] = useState(0);
  const numberOfResults = 10;

  const [issues, setIssues] = useState<node[]>([]);
  useEffect(() => {
    let isSubscribed = true
    const getData = async () => {
      const res: node[] = await fecthDataByKeyword(inputValue, numberOfResults);

      if (isSubscribed) {
        setIssues([...res]);
      }
    };
    getData();

    return () => {
      isSubscribed = false;
    };
  }, [inputValue]);

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