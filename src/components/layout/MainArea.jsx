import { MemoList } from "../memo/MemoList";
import { MemoEditor } from "../memo/MemoEditor";
import { useAuth } from "../../hooks/useAuth";

export function MainArea({
  memos,
  editingId,
  handleEditing,
  onClick,
  isEditing,
  editingText,
  setEditingText,
  updateMemo,
  deleteMemo,
}) {
  const { isLoggedIn } = useAuth();
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
