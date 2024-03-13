export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen border-0 flex items-center justify-center">
      <div className="border-0 w-full h-full flex justify-center items-center side-image">
        Image section
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center bg-mainlighter">
        {" "}
        {children}
      </div>
    </div>
  );
}
