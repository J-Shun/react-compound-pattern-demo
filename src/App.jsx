/* eslint-disable no-unused-vars */
import Flyout from './Flyout';
import Accordion from './Accordion ';
import List from './List';

const style = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

function App() {
  return (
    <div style={style.wrap}>
      {/* <Flyout>
        <Flyout.Toggle />
        <Flyout.List>
          <Flyout.Item>Edit</Flyout.Item>
          <Flyout.Item>Delete</Flyout.Item>
        </Flyout.List>
      </Flyout> */}

      {/* Accordion */}
      {/* <Accordion defaultIndex={0}>
        <Accordion.Section index={0} title='Section 1'>
          Content for Section 1
        </Accordion.Section>
        <Accordion.Section index={1} title='Section 2'>
          Content for Section 2
        </Accordion.Section>
        <Accordion.Section index={2} title='Section 3'>
          Content for Section 3
        </Accordion.Section>
      </Accordion> */}

      {/* List */}
      <List>
        <List.Info>Info</List.Info>
        <List.Setting />
        <List.Items>
          <List.Item type='EDIT' />
          <List.Item type='DELETE' />
          <List.Item type='COPY' />
          <List.Item type='GOGOGO' />
          <List.Item type='HEY' />
        </List.Items>
      </List>

      <br />

      <List>
        <List.Info>Info</List.Info>
        <List.Setting />
        <List.Items>
          <List.Item type='EDIT' />
          <List.Item type='DELETE' />
        </List.Items>
      </List>

      <br />

      <List>
        <List.Info>Info</List.Info>
        <List.Setting />
        <List.Items>
          <List.Item type='DELETE' />
        </List.Items>
      </List>
    </div>
  );
}

export default App;
