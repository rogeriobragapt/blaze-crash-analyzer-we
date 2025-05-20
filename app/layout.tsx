export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
