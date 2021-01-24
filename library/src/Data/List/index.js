import * as React from 'react';

import { SelectProvider } from '../../common/context';

const List = ({ children }) => (
  <SelectProvider>
    <ul>{children}</ul>
  </SelectProvider>
);

export { List };
