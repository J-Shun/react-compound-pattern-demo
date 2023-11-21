/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

// 建立上下文（context）以共享 Accordion 的狀態
const AccordionContext = createContext();

const Accordion = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const style = {
    wrap: {
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div style={style.wrap}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionSection = ({ index, title, children }) => {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);

  const style = {
    section: {
      borderBottom: '1px solid #ccc',
      cursor: 'pointer',
      padding: '8px',
      backgroundColor: index === activeIndex ? '#f0f0f0' : 'white',
    },
    title: {
      fontWeight: 'bold',
    },
    info: {
      padding: '8px',
      borderTop: '1px solid #ccc',
    },
  };

  const handleClick = () => setActiveIndex(index);

  return (
    <div style={style.section} onClick={handleClick}>
      <div style={style.title}>{title}</div>
      {index === activeIndex && <div style={style.info}>{children}</div>}
    </div>
  );
};

Accordion.Section = AccordionSection;

export default Accordion;
