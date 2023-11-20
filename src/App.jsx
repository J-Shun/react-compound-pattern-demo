/* eslint-disable no-unused-vars */
import Flyout from './Flyout';
import Tabs from './Tabs';
import Demo from './Demo';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {/* <Flyout>
        <Flyout.Toggle />
        <Flyout.List>
          <Flyout.Item>Edit</Flyout.Item>
          <Flyout.Item>Delete</Flyout.Item>
        </Flyout.List>
      </Flyout> */}
      <Tabs defaultTab='tab1'>
        <Tabs.TabList>
          <Tabs.Tab label='tab1'>Tab 1</Tabs.Tab>
          <Tabs.Tab label='tab2'>Tab 2</Tabs.Tab>
          <Tabs.Tab label='tab3'>Tab 3</Tabs.Tab>
        </Tabs.TabList>

        <Tabs.TabPanel label='tab1'>Content for Tab 1</Tabs.TabPanel>
        <Tabs.TabPanel label='tab2'>Content for Tab 2aasdasdas</Tabs.TabPanel>
        <Tabs.TabPanel label='tab3'>Content for Tab 30.0.0.0.0</Tabs.TabPanel>
      </Tabs>
      {/* <Demo /> */}
    </div>
  );
}

export default App;
