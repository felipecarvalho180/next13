export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl mb-3">Auth Layout</h1>
      {children}
    </div>
  );
}
