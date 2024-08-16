import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "eoeoeo",
  description: "merubah jumlah atau replace musuh",
};

export default function MapLayout({
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
