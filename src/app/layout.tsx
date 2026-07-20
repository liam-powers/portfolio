import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liam Powers",
  description:
    "Software engineer passionate about making complex things feel simple.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white font-jetbrains-mono flex flex-col items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
