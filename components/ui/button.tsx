export function Button({ children, className, ...props }) {
  return (
    <button className={`transition-all font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
}