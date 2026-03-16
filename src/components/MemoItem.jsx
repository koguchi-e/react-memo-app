export function MemoItem({ memo, editingId, handleEditing }) {
  return (
    <>
      <li key={memo.id}>
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
}
