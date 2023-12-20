import { Header } from '@/components/header';
import type { Metadata } from 'next';
import { Indie_Flower, Inter, Parisienne } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const parisienne = Parisienne({ weight: '400', subsets: ['latin'] });
const indieFlower = Indie_Flower({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amore Empadas',
  description: 'Levando amor e satisfação a cada mordida',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-primary ${indieFlower.className}`}>
        <header className="max-w-7xl mx-auto">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
