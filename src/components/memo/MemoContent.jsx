import { useState, useEffect } from "react";

import { MemoList } from "./MemoList";
import { MemoEditor } from "./MemoEditor";
import { useAuth } from "../../hooks/useAuth";

export function MemoContent({ isEditing, setIsEditing }) {
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
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const { isLoggedIn } = useAuth();

  const addMemo = () => {
    const newMemos = [
      ...memos,
      {
        id: Math.random(),
        text: "新規メモ",
        editing: false,
      },
    ];
    setMemos(newMemos);
    localStorage.setItem("memos", JSON.stringify(newMemos));
  };

  const handleEditing = (memo) => {
    setIsEditing(true);
    setEditingId(memo.id);
    setEditingText(memo.text);
  };

  const updateMemo = () => {
    const newMemos = memos.map((memo) =>
      memo.id === editingId ? { ...memo, text: editingText } : memo,
    );
    setMemos(newMemos);
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setIsEditing(false);
  };

  const deleteMemo = (id) => {
    const newMemos = memos.filter((memo) => memo.id !== id);
    setMemos(newMemos);
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setIsEditing(false);
  };

  return (
    <div className="main-area">
      <div className="list-area">
        <MemoList
          memos={memos}
          editingId={editingId}
          handleEditing={handleEditing}
        />

        <div className="create-button-area">
          {isLoggedIn && (
            <button className="primary-button" onClick={addMemo}>
              ＋
            </button>
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
  );
}
