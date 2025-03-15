import { helveticaNow } from "@/utils/fonts";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Henke",
  description: "Hey! I am Bruno Henke. Digital designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNow.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
