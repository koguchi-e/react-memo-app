export function TextAreaField({ id, value, onChange, disabled }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      rows={5}
      className="textarea-form"
      disabled={disabled}
    ></textarea>
  );
}
