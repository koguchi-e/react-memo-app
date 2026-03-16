import { TextAreaField } from "../Form/TextAreaField";
export function MemoEditor({
  editingId,
  editMemo,
  setEditMemo,
  updateMemo,
  deleteMemo,
}) {
  return (
    <>
      <TextAreaField
        id={editingId}
        value={editMemo}
        onChange={(e) => setEditMemo(e.target.value)}
      ></TextAreaField>
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
  );
}
