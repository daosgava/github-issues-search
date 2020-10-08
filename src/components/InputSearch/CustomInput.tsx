import React, { ReactElement } from 'react';
import { Input } from '../shared';

type CustomInputProps = {
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  placeholder: string;
};

const CustomInput = ({
  inputValue,
  handleOnChange,
  handleKeyDown,
  placeholder,
}: CustomInputProps): ReactElement => {
  return (
    <>
      <Input
        tabIndex={0}
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
