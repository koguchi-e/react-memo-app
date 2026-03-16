import { useState, memo } from "react";
import { TextAreaField } from "./components/TextAreaField";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([
    { id: 1, text: "メモ1\nメモ1の内容" },
    { id: 2, text: "メモ2\nメモ2の内容" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editMemo, setEditMemo] = useState("");

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

  const handleEditing = (memo) => {
    setIsEditing(true);
    setEditingId(memo.id);
    setEditMemo(memo.text);
  };

  const updateMemo = () => {
    setMemos(
      memos.map((memo) =>
        memo.id === editingId ? { ...memo, text: editMemo } : memo
      )
    );
    setIsEditing(false);
  };

  let labelName;
  if (isEditing === true) {
    labelName = "編集";
  } else {
    labelName = "一覧";
  }

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
    setIsEditing(false);
  };

  return (
    <>
      <table className="container">
        <tr>
          <td>
            <label className="label">{labelName}</label>
            <ul className="memos-list">
              {memos.map((memo) => (
                <li key={memo.id}>
                  <button
                    className="button-reset"
                    onClick={() => handleEditing(memo)}
                  >
                    {memo.text.split("\n")[0]}
                  </button>
                </li>
              ))}
            </ul>
            <button className="button-reset" onClick={addMemos}>
              ＋
            </button>
          </td>
          <td>
            {isEditing === true && (
              <>
                <TextAreaField
                  id={editingId}
                  value={editMemo}
                  onChange={(e) => setEditMemo(e.target.value)}
                >
                  {memo.text}
                </TextAreaField>
                <button type="submit" className="button" onClick={updateMemo}>
                  更新
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => deleteMemo(editingId)}
                >
                  削除
                </button>
              </>
            )}
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;
