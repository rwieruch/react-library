import * as React from 'react';

import { SelectContext } from '../common/context';

const SelectButton = ({ id, children }) => {
  const { toggleSelect } = React.useContext(SelectContext);

  return (
    <button type="button" onClick={() => toggleSelect(id)}>
      {children}
    </button>
  );
};

export { SelectButton };
