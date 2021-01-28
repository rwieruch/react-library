import * as React from 'react';
import styled from 'styled-components';
import { ISelectContext } from 'mh-react-library';
import { SelectContext } from '../../common/context';

const Li = styled.li`
  &.selected {
    background-color: grey;
  }

  margin-left: ${({ offset }: { offset: number }) => offset}px;

  ${({ theme }: { theme: string }) => theme};
`;

const Item = ({
  id,
  offset = 0,
  theme,
  children,
}: {
  id: string;
  offset: number;
  theme: string;
  children: React.ReactNode;
}) => {
  const { selectedIds } = React.useContext<ISelectContext>(
    SelectContext
  );

  return (
    <Li
      theme={theme}
      offset={offset}
      className={selectedIds!.includes(id) ? 'selected' : ''}
    >
      {children}
    </Li>
  );
};

export { Item };
