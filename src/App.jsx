import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { MainArea } from "./components/layout/MainArea";
import { LoginContext } from "./contexts/LoginContext";
import "./App.css";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        memo.id === editingId ? { ...memo, text: editingText } : memo,
      ),
    );
    setIsEditing(false);
  };

  let headerLabel;
  if (isEditing === true) {
    if (isLoggedIn === true) {
      headerLabel = "編集";
    } else {
      headerLabel = "詳細";
    }
  } else {
    headerLabel = "一覧";
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
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <table className="container">
          <tbody>
            <tr>
              <td>
                <Header headerLabel={headerLabel}></Header>
                <MainArea
                  memos={memos}
                  editingId={editingId}
                  handleEditing={handleEditing}
                  onClick={addMemo}
                  isEditing={isEditing}
                  editingText={editingText}
                  setEditingText={setEditingText}
                  updateMemo={updateMemo}
                  deleteMemo={deleteMemo}
                ></MainArea>
              </td>
            </tr>
          </tbody>
        </table>
      </LoginContext.Provider>
    </>
  );
}

export default App;
