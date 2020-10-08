import React, { ReactElement } from 'react';
import { Input } from '../shared';

type CustomInputProps = {
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleKeyDown: (e: React.KeyboardEvent) => void;
};

const CustomInput = ({
  inputValue,
  handleOnChange,
  handleKeyDown,
}: CustomInputProps): ReactElement => {
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

export default CustomInput;
