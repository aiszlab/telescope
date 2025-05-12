import type { Metadata } from "next";
import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aisz实验室",
  description: "这里有很多奇奇怪怪的东西，等你来探索",
};

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  return (
    <html lang="zh_CN" className="scroll-smooth">
      <body className={geist.className}>{props.children}</body>

      <GoogleAnalytics gaId="G-4S32MV4L55" />
    </html>
  );
}
