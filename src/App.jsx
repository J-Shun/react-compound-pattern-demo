/* eslint-disable no-unused-vars */
import Accordion from './Accordion ';
import Item from './Card';
// import

function App() {
  return (
    <div className='wrap'>
      {/* Accordion */}
      <Accordion>
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

      <br />

      <Accordion>
        <Accordion.Section index={0} title='什麼是 Compound Pattern？'>
          <p>1. 一種提高可維護性跟彈性的元件設計方法</p>
          <p>
            2. 讓相關聯的元件用不明顯的方式
            <span className='point'>共享狀態</span>
          </p>
          <p>3. 組件可動態配置，在不同場合下進行變化</p>
        </Accordion.Section>
        <Accordion.Section index={1} title='好處'>
          <p>1. 模組化： 每個子元件負責特定的功能，提高代碼可讀性和可維護性</p>
          <p>
            2. 靈活性：
            可輕鬆組合、擴展或修改子元件，不影響其他部分，提供更大的靈活性
          </p>
          <p>
            3. 狀態管理成本低：所有相關元件的 UI
            狀態都集中在內部處理，只需專注元件的使用
          </p>
        </Accordion.Section>
        <Accordion.Section index={2} title='使用方式'>
          <p>
            1.
            主要由一個父層和多個子層組成，父層主要作用為邏輯處理設定，並渲染所有接收的元件
          </p>
          <p>2. 透過 Context 使組件間共享狀態，保持彼此作用</p>
        </Accordion.Section>
      </Accordion>

      <br />

      {/* Item */}
      <Item>
        <Item.Info>Item 1</Item.Info>
        <Item.Setting />
        <Item.Features>
          <Item.Feature type='EDIT' />
          <Item.Feature type='DELETE' />
        </Item.Features>
      </Item>

      <br />

      <Item>
        <Item.Info>Item 1</Item.Info>
        <Item.Setting />
        <Item.Features>
          <Item.Feature type='EDIT' />
          <Item.Feature type='DELETE' />
          <Item.Feature type='COPY' />
          <Item.Feature type='TRANSFER' />
          <Item.Feature type='DOWNLOAD' />
        </Item.Features>
      </Item>
    </div>
  );
}

export default App;
