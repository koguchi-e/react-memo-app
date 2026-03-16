import { TextAreaField } from "../Form/TextAreaField";
import { SubmitButton } from "../Form/SubmitButton";
export function MemoEditor({
  editingId,
  editingText,
  setEditingText,
  updateMemo,
  deleteMemo,
}) {
  return (
    <>
      <TextAreaField
        id={editingId}
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
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
