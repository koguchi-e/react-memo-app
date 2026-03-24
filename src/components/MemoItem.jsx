import { memo } from "react";

export const MemoItem = memo(function MemoItem({
  memo,
  editingId,
  handleEditing,
}) {
  let firstLine = "";
  if (memo && memo.text) {
    firstLine = memo.text.split("\n")[0];
  }
  return (
    <li>
      {editingId === memo.id ? (
        firstLine
      ) : (
        <button className="link-button" onClick={() => handleEditing(memo)}>
          {firstLine}
        </button>
      )}
    </li>
  );
});
