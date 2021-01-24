import * as React from 'react';
import styled from 'styled-components';

import { SelectContext } from '../../common/context';

const Li = styled.li`
  &.selected {
    background-color: grey;
  }

  margin-left: ${({ offset }) => offset}px;

  ${({ theme }) => theme};
`;

const Item = ({ id, offset = 0, theme, children }) => {
  const { selectedIds } = React.useContext(SelectContext);

  return (
    <Li
      theme={theme}
      offset={offset}
      className={selectedIds.includes(id) && 'selected'}
    >
      {children}
    </Li>
  );
};

export { Item };
