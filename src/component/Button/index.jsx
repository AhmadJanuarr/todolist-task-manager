export default function Button({ children, variant, onClick, type }) {
  const variantClasses = variant === "danger" ? "bg-red" : "bg-green";
  return (
    <button
      className={`bg-green px-2 py-1 rounded text-white  ${variantClasses}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
