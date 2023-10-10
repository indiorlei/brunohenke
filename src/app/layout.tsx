import { ReactNode } from "react";
import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Henke",
  description:
    "Hey, I’m Bruno Henke! I’ve been living in São Paulo working as a designer at Work&Co. Say hi, brunohenkekds@gmail.com",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
