import * as React from 'react';
import { ISelectContext } from 'mh-react-library';
import { SelectContext } from '../common/context';

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
