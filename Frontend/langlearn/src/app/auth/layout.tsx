





export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className = "h-screen flex items-center justify-center">
        <div className = "border-2 w-full h-full">
        Image section
        </div>
        {children}
    </div>
  );
}
