/* eslint-disable no-unused-vars */
import Flyout from './Flyout';
import Accordion from './Accordion ';

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
      <Accordion defaultIndex={0}>
        <Accordion.Section index={0} title='Section 1'>
          Content for Section 1
        </Accordion.Section>
        <Accordion.Section index={1} title='Section 2'>
          Content for Section 2
        </Accordion.Section>
        <Accordion.Section index={2} title='Section 3'>
          Content for Section 3
        </Accordion.Section>
      </Accordion>
    </div>
  );
}

export default App;
