import { TextAreaField } from "../form/TextAreaField";
import { SubmitButton } from "../form/SubmitButton";
import { useAuth } from "../../hooks/useAuth";

export function MemoEditor({
  editingId,
  editingText,
  setEditingText,
  updateMemo,
  deleteMemo,
}) {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <TextAreaField
        id={editingId}
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
        disabled={!isLoggedIn}
      ></TextAreaField>

      <div className="edit-button-area">
        <SubmitButton
          type="submit"
          className="button update-button"
          onClick={updateMemo}
          children="更新"
          disabled={!isLoggedIn}
        ></SubmitButton>
        <SubmitButton
          type="button"
          className="button delete-button"
          onClick={() => deleteMemo(editingId)}
          children="削除"
          disabled={!isLoggedIn}
        ></SubmitButton>
      </div>
    </>
  );
}
