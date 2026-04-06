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

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
    setIsEditing(false);
  };

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);
  return (
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
              <button className="primary-button" onClick={onClick}>
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
  );
}
