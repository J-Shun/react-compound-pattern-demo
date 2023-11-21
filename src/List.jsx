/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

const ListContext = createContext();

const List = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const style = {
    wrap: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      width: '320px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px',
    },
  };

  return (
    <ListContext.Provider value={{ isOpen, handleClick }}>
      <div style={style.wrap}>{children}</div>
    </ListContext.Provider>
  );
};

const Info = ({ children }) => {
  return <div>{children}</div>;
};

const Setting = () => {
  const { handleClick } = useContext(ListContext);

  return <button onClick={handleClick}>Toggle</button>;
};

const Items = ({ children }) => {
  const style = {
    lists: {
      position: 'absolute',
      right: '0',
      top: '100%',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px',
      margin: '0',
    },
  };
  const { isOpen } = useContext(ListContext);

  return isOpen && <ul style={style.lists}>{children}</ul>;
};

const Item = ({ type }) => {
  const style = {
    item: {
      cursor: 'pointer',
      listStyle: 'none',
    },
  };

  return <li style={style.item}>{type}</li>;
};

List.Info = Info;
List.Setting = Setting;
List.Items = Items;
List.Item = Item;

export default List;
