import type { Metadata } from "next";
import "./globals.css"; // <--- THIS LINE IS CRITICAL

export const metadata: Metadata = {
  title: "Bilal Sherwani | Full Stack CMS Expert",
  description: "10+ Years of E-commerce Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}