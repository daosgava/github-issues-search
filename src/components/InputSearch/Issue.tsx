import React, { ReactElement, useCallback } from 'react';
import Styled from 'styled-components';
import { node } from '../shared/types';

type styleProps = {
  ['data-highlight']: boolean;
}

const Li = Styled.li`
  cursor: pointer;
  margin: 2px;
  overflow: hidden;
  padding: 2px;
  background-color: ${(props: styleProps) => (props['data-highlight'] ? 'dodgerblue' : 'none')};
  color: ${(props: styleProps) => (props['data-highlight'] ? 'white' : 'black')};

  &:hover, &:focus{
    background-color: dodgerblue;
    border-radius: 2px;
    color: white;
    outline: 0;
  }
`;

const EmojiContainer = Styled.div`
  display: inline-block;
  margin-right: 10px;
`;

type IssueProps = {
  data: node;
  highlight: boolean;
};

const Issue = ({ data, highlight }: IssueProps): ReactElement => {

  const handleClick = useCallback(() => {
    window.location.assign(data.node.url);
  }, [data]);

  return (
    <Li
      onClick={handleClick}
      data-highlight={highlight}
    >
      <EmojiContainer>
        <span role="img" aria-label="search-result">🕵🏻‍♂️ </span>
      </EmojiContainer>
      {data.node.title}
    </Li>
  )
};

export default Issue;
