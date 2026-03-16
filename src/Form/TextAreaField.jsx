export function TextAreaField({ id, value, onChange }) {
  return (
    <>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={5}
        className="textarea-form"
      ></textarea>
    </>
  );
}
