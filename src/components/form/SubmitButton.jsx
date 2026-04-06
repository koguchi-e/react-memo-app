export function SubmitButton({ type, className, onClick, children }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
