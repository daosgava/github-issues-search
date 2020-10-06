import React, { ReactElement } from 'react';
import { node } from '../shared/types';
import { Box } from '../shared';
import Issue from './Issue';

type IssuesBoxProps = {
  issues: node[];
  cursor: number;
};

const IssuesBox = ({
  issues,
  cursor,
}: IssuesBoxProps): ReactElement => {
  return (
    <Box data-display={issues.length}>
      {
        issues.length > 0
        && issues.map((issue, index) => (
          <Issue key={`issue-${index}`} data={issue} highlight={cursor === index} />
        ))
      }
    </Box>
  );
};

export default IssuesBox;
