import React from "react";
import { AppoloWrapper } from "@/providers/AppoloWrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book List App",
  description: "Explore your favorite books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppoloWrapper>{children}</AppoloWrapper>
      </body>
    </html>
  );
}
