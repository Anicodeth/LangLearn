





export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-2 w-full h-full flex justify-center items-center">Image section</div>
      <div className="border-2 w-full h-full flex justify-center items-center"> {children}</div>
    </div>
  );
}
