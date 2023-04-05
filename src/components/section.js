export default function Section({ children, className }) {
  return (
    <div className="py-2 mt-2">
      <div className={`${className ?? ""} max-w-7xl px-4 mx-auto`}>
        {children}
      </div>
    </div>
  );
}
