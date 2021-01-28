import * as React from 'react';

import { SelectProvider } from '../../common/context';

const List = ({ children }: { children: React.ReactNode }) => (
  <SelectProvider>
    <ul>{children}</ul>
  </SelectProvider>
);

export { List };
