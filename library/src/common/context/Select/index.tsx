import * as React from 'react';

import { ISelectContext } from '../../../types';

const SelectContext = React.createContext<ISelectContext>({});

const SelectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((state) =>
        state.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedIds((state) => state.concat(id));
    }
  };

  return (
    <SelectContext.Provider
      value={{
        selectedIds,
        toggleSelect,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export { SelectContext, SelectProvider };
