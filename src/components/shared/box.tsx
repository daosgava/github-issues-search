import Styled from 'styled-components';

type styleProps = {
  'data-display': number;
}

const Box = Styled.div`
  border: 1px solid gainsboro;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: ${(props: styleProps) => props['data-display'] ? 'block' : 'none'};
  height: auto;
  list-style: none;
  margin: 0 auto;
  overflow: hidden;
  padding: 5px;
  text-align: left;
  width: 508px;
`;

export default Box;