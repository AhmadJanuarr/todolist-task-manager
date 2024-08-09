export default function Button({ children, variant, onClick, type }) {
  const variantClasses = variant === "danger" ? "bg-red" : "bg-green";
  return (
    <button
      className={`bg-green px-4 py-1 rounded text-white text-[11px] laptop:text-[16px] laptop:px-6 ${variantClasses}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
