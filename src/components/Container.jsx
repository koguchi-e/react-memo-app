export function Container({ isEditing, children }) {
  let labelName;
  if (isEditing === true) {
    labelName = "編集";
  } else {
    labelName = "一覧";
  }

  return (
    <>
      <table className="container">
        <tr>
          <td>
            <label className="label">{labelName}</label>
            {children}
          </td>
        </tr>
      </table>
    </>
  );
}
