import { memo } from "react";

export const MemoItem = memo(function MemoItem({
  memo,
  editingId,
  handleEditing,
}) {
  return (
    <>
      <li>
        {editingId === memo.id ? (
          memo.text.split("\n")[0]
        ) : (
          <button className="button-reset" onClick={() => handleEditing(memo)}>
            {memo.text.split("\n")[0]}
          </button>
        )}
      </li>
    </>
  );
});
