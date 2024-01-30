import FloatingButton from "@/components/floatingButton";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Indie_Flower, Inter } from "next/font/google";
import "./globals.css";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--indie-flower",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empada Mais Sabores",
  description: "Levando amor e satisfação a cada mordida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary ${inter.className} ${indieFlower.variable}`}>
        <FloatingButton />
        <Header />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
