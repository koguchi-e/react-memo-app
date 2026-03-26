import { TextAreaField } from "./form/TextAreaField";
import { SubmitButton } from "./form/SubmitButton";

export function MemoEditor({
  editingId,
  editingText,
  setEditingText,
  updateMemo,
  deleteMemo,
  isLoggedIn,
}) {
  return (
    <>
      <TextAreaField
        id={editingId}
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
      ></TextAreaField>
      {isLoggedIn && (
        <>
          <SubmitButton
            type="submit"
            className="button"
            onClick={updateMemo}
            label="更新"
          ></SubmitButton>
          <SubmitButton
            type="button"
            className="button"
            onClick={() => deleteMemo(editingId)}
            label="削除"
          ></SubmitButton>
        </>
      )}
    </>
  );
}
