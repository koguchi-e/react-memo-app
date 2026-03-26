import { useState, useEffect, createContext } from "react";
import { MemoList } from "./components/MemoList";
import { MemoEditor } from "./components/MemoEditor";
import { SubmitButton } from "./components/form/SubmitButton";
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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <table className="container">
        <tbody>
          <tr>
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
              <td>
                <div className="header">
                  <label className="label">{labelName}</label>

                  <div className="login-area">
                    {isLoggedIn ? (
                      <SubmitButton
                        type="button"
                        className="button loggin-btn"
                        onClick={handleLogout}
                        label="ログアウト"
                      />
                    ) : (
                      <SubmitButton
                        type="button"
                        className="button loggin-btn"
                        onClick={handleLogin}
                        label="ログイン"
                      />
                    )}
                  </div>
                </div>

                <div className="main-area">
                  <div className="list-area">
                    <MemoList
                      memos={memos}
                      editingId={editingId}
                      handleEditing={handleEditing}
                    ></MemoList>

                    <div className="create-button-area">
                      {isLoggedIn && (
                        <>
                          <button className="primary-button" onClick={addMemo}>
                            ＋
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="memo-area">
                    {isEditing && (
                      <MemoEditor
                        editingId={editingId}
                        editingText={editingText}
                        setEditingText={setEditingText}
                        updateMemo={updateMemo}
                        deleteMemo={deleteMemo}
                      />
                    )}
                  </div>
                </div>
              </td>
            </LoginContext.Provider>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
