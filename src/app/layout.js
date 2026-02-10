import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/data/content';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
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
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
