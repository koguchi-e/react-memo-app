import { TextAreaField } from "../form/TextAreaField";
import { SubmitButton } from "../form/SubmitButton";
import { useLogin } from "../../hooks/useLogin";

export function MemoEditor({
  editingId,
  editingText,
  setEditingText,
  updateMemo,
  deleteMemo,
}) {
  const { isLoggedIn } = useLogin();
  return (
    <>
      <TextAreaField
        id={editingId}
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
      ></TextAreaField>
      {isLoggedIn && (
        <div className="edit-button-area">
          <SubmitButton
            type="submit"
            className="button update-button"
            onClick={updateMemo}
            label="更新"
          ></SubmitButton>
          <SubmitButton
            type="button"
            className="button delete-button"
            onClick={() => deleteMemo(editingId)}
            label="削除"
          ></SubmitButton>
        </div>
      )}
    </>
  );
}
