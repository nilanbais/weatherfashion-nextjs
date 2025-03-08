import type { Metadata } from "next";
import { geistSans, geistMono} from "./ui/fonts";
import "./ui/globals.css";


export const metadata: Metadata = {
  title: "Weather Fashion",
  description: "The best Fashion for any type of Weather.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
