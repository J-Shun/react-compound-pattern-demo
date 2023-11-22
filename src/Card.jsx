/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

const ItemContext = createContext();

const Item = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <ItemContext.Provider value={{ isOpen, handleClick }}>
      <div className='item-container'>{children}</div>
    </ItemContext.Provider>
  );
};

const Info = ({ children }) => {
  return <div>{children}</div>;
};

const Setting = () => {
  const { handleClick } = useContext(ItemContext);

  return <button onClick={handleClick}>Toggle</button>;
};

const Features = ({ children }) => {
  const { isOpen } = useContext(ItemContext);

  return isOpen && <ul className='item-features'>{children}</ul>;
};

const Feature = ({ type }) => {
  return <li className='item-feature'>{type}</li>;
};

Item.Info = Info;
Item.Setting = Setting;
Item.Features = Features;
Item.Feature = Feature;

export default Item;
