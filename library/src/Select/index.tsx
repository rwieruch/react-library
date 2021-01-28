import * as React from 'react';

import { SelectContext } from '../common/context';
import { ISelectContext } from '../types';

import styles from './styles.css';

const SelectButton = ({
  id,
  children
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { toggleSelect } = React.useContext<ISelectContext>(
    SelectContext
  );

  return (
    <button
      type="button"
      className={styles.red}
      onClick={() => toggleSelect!(id)}
    >
      {children}
    </button>
  );
};

export { SelectButton };
