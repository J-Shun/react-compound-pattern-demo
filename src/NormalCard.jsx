/* eslint-disable react/prop-types */
import { useState } from 'react';

const items = [
  { id: 1, text: '項目一' },
  { id: 2, text: '項目二' },
  { id: 3, text: '項目三' },
];

const Item = ({ text }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEditClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div>
        {text}
        <button onClick={handleEditClick}>Edit</button>
      </div>
      {isMenuOpen && (
        <div>
          <button>編輯</button>
          <button>刪除</button>
        </div>
      )}
    </div>
  );
};

const ListComponent = () => {
  return (
    <div>
      <h1>列表</h1>
      {items.map((item) => (
        <Item key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default ListComponent;
