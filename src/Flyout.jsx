/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useState, useContext } from 'react';

const FlyoutContext = createContext();

const Flyout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlyoutContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FlyoutContext.Provider>
  );
};

// Toggle
const Toggle = () => {
  const { isOpen, setIsOpen } = useContext(FlyoutContext);

  return <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>;
};

// List
const List = ({ children }) => {
  const { isOpen } = useContext(FlyoutContext);
  return isOpen && <ul>{children}</ul>;
};

const Item = ({ children }) => {
  return <li>{children}</li>;
};

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;

export default Flyout;
