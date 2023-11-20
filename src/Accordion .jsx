/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

// 建立上下文（context）以共享 Accordion 的狀態
const AccordionContext = createContext();

const Accordion = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionSection = ({ index, title, children }) => {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);

  const handleClick = () => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        borderBottom: '1px solid #ccc',
        cursor: 'pointer',
        padding: '8px',
        backgroundColor: index === activeIndex ? '#f0f0f0' : 'white',
      }}
    >
      <div style={{ fontWeight: 'bold' }} onClick={handleClick}>
        {title}
      </div>
      {index === activeIndex && (
        <div style={{ padding: '8px', borderTop: '1px solid #ccc' }}>
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.Section = AccordionSection;

export default Accordion;
