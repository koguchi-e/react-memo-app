export function Container({ label, id, children }) {
  return (
    <>
      <label htmlFor={id} className="label">
        <b>{label}</b>
      </label>
      <div className="container">{children}</div>
    </>
  );
}
