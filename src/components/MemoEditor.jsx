import { TextAreaField } from "../Form/TextAreaField";
import { SubmitButton } from "../Form/SubmitButton";
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
      <SubmitButton
        type="submit"
        onClick={updateMemo}
        label="更新"
      ></SubmitButton>
      <SubmitButton
        type="button"
        onClick={() => deleteMemo(editingId)}
        label="削除"
      ></SubmitButton>
    </>
  );
}
