export function SubmitButton({ type, onClick, label }) {
  return (
    <>
      <button type={type} className="button" onClick={onClick}>
        {label}
      </button>
    </>
  );
}
