import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@TAILWINDCSS'

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Modding God Hand",
  description: "merubah jumlah atau replace musuh",
  icons:'/next.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
