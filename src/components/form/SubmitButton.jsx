export function SubmitButton({ type, className, onClick, label }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
}
