export function Card({ children }) {
  return <div className="rounded-2xl bg-zinc-900 shadow-lg">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}