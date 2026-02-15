import { Inter, Reenie_Beanie } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/data/content';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const reenie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-reenie',
});

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${reenie.variable}`}>{children}</body>
    </html>
  );
}
