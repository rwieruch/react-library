import { List, Item } from 'mh-react-library/lib/data';
import { SelectButton } from 'mh-react-library/lib/select';

// TODO: finally make it work without the extra /lib path

// import { List, Item } from 'mh-react-library/data';
// import { SelectButton } from 'mh-react-library/select';

const list = [
  {
    id: '1',
    name: 'foo',
    isSelect: false,
  },
  {
    id: '2',
    name: 'bar',
    isSelect: true,
  },
];

const App = () => (
  <List>
    {list.map((item, i) => (
      <Item
        key={item.id}
        id={item.id}
        offset={24 * i + 1}
        theme={`
          &.selected {
            background-color: green;
          }
        `}
      >
        {item.name} <SelectButton id={item.id}>Select</SelectButton>
      </Item>
    ))}
  </List>
);

export default App;
