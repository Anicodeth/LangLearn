





export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div>
        Image section
        </div>
        {children}
    </div>
  );
}
