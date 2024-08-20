// import { fetchDataGodHand } from "app/api/route";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import MetadataState from "store/metadataStore"
// import GridImageState from "store/gridStore"

const inter = Inter({ subsets: ["vietnamese"] });

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
