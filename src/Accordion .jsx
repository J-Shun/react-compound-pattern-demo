/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => {
      if (prev === index) return null;
      return index;
    });
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, handleClick }}>
      <div className='accordion-container'>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionSection = ({ index, title, children }) => {
  const { activeIndex, handleClick } = useContext(AccordionContext);

  return (
    <div
      className='accordion-section'
      onClick={() => {
        handleClick(index);
      }}
    >
      <div className='accordion-title'>{title}</div>
      {index === activeIndex && (
        <div className='accordion-info'>{children}</div>
      )}
    </div>
  );
};

Accordion.Section = AccordionSection;

export default Accordion;
