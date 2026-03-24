import { useState, useEffect, createContext } from "react";
import { MemoList } from "./components/MemoList";
import { MemoEditor } from "./components/MemoEditor";
import "./App.css";

export const LoginContext = createContext();

function App() {
  const [memos, setMemos] = useState(() => {
    const data = localStorage.getItem("memos");
    if (data) {
      return JSON.parse(data);
    }
    return [
      { id: 1, text: "メモ1\nメモ1の内容" },
      { id: 2, text: "メモ2\nメモ2の内容" },
    ];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const addMemo = () => {
    setMemos([
      ...memos,
      {
        id: Math.random(),
        text: "新規メモ",
        editing: false,
      },
    ]);
  };

  const handleEditing = (memo) => {
    setIsEditing(true);
    setEditingId(memo.id);
    setEditingText(memo.text);
  };

  const updateMemo = () => {
    setMemos(
      memos.map((memo) =>
        memo.id === editingId ? { ...memo, text: editingText } : memo
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

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  return (
    <>
      <table className="container">
        <tbody>
          <tr>
            <td>
              <label className="label">{labelName}</label>
              <MemoList
                memos={memos}
                editingId={editingId}
                handleEditing={handleEditing}
              ></MemoList>
              <LoginContext.Provider value={{ isLogin, setIsLogin }}>
                <button className="link-button" onClick={addMemo}>
                  ＋
                </button>
              </LoginContext.Provider>
            </td>
            <td>
              {isEditing && (
                <>
                  <MemoEditor
                    editingId={editingId}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    updateMemo={updateMemo}
                    deleteMemo={deleteMemo}
                  ></MemoEditor>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
