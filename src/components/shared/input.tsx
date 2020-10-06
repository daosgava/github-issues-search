import Styled from 'styled-components';

const Input = Styled.input`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0;
  border: 1px solid gray;
  font-size: 20px;
  height: 50px;
  padding-left: 14px;
  width: 500px;
  &:focus {
    outline: none !important;
    border: 2px solid dodgerblue;
    box-shadow: 0px 0px 3px 0px dodgerblue
  }
`;

export default Input;
