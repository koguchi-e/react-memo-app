import { MemoItem } from "./MemoItem";

export function MemoList({ memos, editingId, handleEditing }) {
  return (
    <ul className="memos-list">
      {memos.map((memo) => (
        <MemoItem
          key={memo.id}
          memo={memo}
          editingId={editingId}
          handleEditing={handleEditing}
        ></MemoItem>
      ))}
    </ul>
  );
}
