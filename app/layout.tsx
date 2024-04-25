import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@pigment-css/react/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pigment CSS Demo",
  description: "Pigment CSS is a zero-runtime CSS-in-JS library that extracts the colocated styles to their own CSS files at build time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
