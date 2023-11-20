/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

// Context 用在 Compound Components 之間共享狀態
const TabsContext = createContext();

// 整個 container，下面隨意進行組合
const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleTabClick }}>
      {children}
    </TabsContext.Provider>
  );
};

// 顯示標籤列表
const TabList = ({ children }) => {
  return <div>{children}</div>;
};

// 點擊的按鈕
const Tab = ({ label }) => {
  const { activeTab, handleTabClick } = useContext(TabsContext);

  return (
    <div
      onClick={() => handleTabClick(label)}
      style={{
        cursor: 'pointer',
        borderBottom:
          activeTab === label ? '2px solid blue' : '2px solid transparent',
        padding: '8px',
        marginRight: '10px',
        display: 'inline-block',
      }}
    >
      {label}
    </div>
  );
};

// 顯示選中標籤的內容
const TabPanel = ({ label, children }) => {
  const { activeTab } = useContext(TabsContext);

  return activeTab === label ? <div>{children}</div> : null;
};

// Compound Components 的組合
Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
