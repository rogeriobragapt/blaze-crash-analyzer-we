// app/login/layout.tsx

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: '2rem' }}>
      {children}
    </section>
  );
}
