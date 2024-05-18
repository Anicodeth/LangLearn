import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Lang Learn",
  description: "A new way to learn languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={new QueryClient()}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
