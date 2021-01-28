import * as React from 'react';
import { SelectContext } from '../common/context';
import { ISelectContext } from '../types';

const SelectButton = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { toggleSelect } = React.useContext<ISelectContext>(
    SelectContext
  );

  return (
    <button type="button" onClick={() => toggleSelect!(id)}>
      {children}
    </button>
  );
};

export { SelectButton };
