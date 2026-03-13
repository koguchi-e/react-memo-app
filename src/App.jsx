import { useState } from "react";

import { Container } from "./components/Container";
import { TextAreaField } from "./components/TextAreaField";
import "./App.css";
import { memo } from "react";

function App() {
  const [memos, setMemos] = useState([
    { id: 1, text: "メモ1\nメモ1の内容" },
    { id: 2, text: "メモ2\nメモ2の内容" },
  ]);
  // const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editMemo, setEditMemo] = useState(memo.text);

  const addMemos = () => {
    setMemos([
      ...memos,
      {
        id: Date.now(),
        text: "新規メモ",
        editing: false,
      },
    ]);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const updateMemo = () => {
    setMemos([
      ...memos,
      {
        id: Date.now(),
        text: "新規メモ",
      },
    ]);
  };

  return (
    <>
      <Container label="一覧">
        <ul className="memos-list">
          {memos.map((memo) => (
            <li key={memo.id}>
              <button className="button-reset" onClick={handleEditing}>
                {memo.text.split("\n")[0]}
              </button>
            </li>
          ))}
        </ul>
        <button className="button-reset" onClick={addMemos}>
          ＋
        </button>
      </Container>
      <Container label="更新">
        {isEditing === true ? (
          <>
            <TextAreaField id={memo.id} value={editMemo}>
              {memo}
            </TextAreaField>
            <button type="submit" className="button" onClick={updateMemo}>
              更新
            </button>
          </>
        ) : (
          <p>ここに更新</p>
        )}
      </Container>
    </>
  );
}

export default App;
