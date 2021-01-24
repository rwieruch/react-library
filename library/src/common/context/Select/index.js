import * as React from 'react';

const SelectContext = React.createContext({});

const SelectProvider = ({ children }) => {
  const [selectedIds, setSelectedIds] = React.useState([]);

  const toggleSelect = id => {
    if (selectedIds.includes(id)) {
      setSelectedIds(state =>
        state.filter(selectedId => selectedId !== id)
      );
    } else {
      setSelectedIds(state => state.concat(id));
    }
  };

  return (
    <SelectContext.Provider
      value={{
        selectedIds,
        toggleSelect
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export { SelectContext, SelectProvider };
