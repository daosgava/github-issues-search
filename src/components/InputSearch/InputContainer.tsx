import React, { ReactElement } from 'react';
import { Input } from '../shared';

type InputContainerProps = {
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleKeyDown: (e: React.KeyboardEvent) => void;
};

const InputContainer = ({
  inputValue,
  handleOnChange,
  handleKeyDown,
}: InputContainerProps): ReactElement => {
  return (
    <>
      <Input
        tabIndex={0}
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default InputContainer;
