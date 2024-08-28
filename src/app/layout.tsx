import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextUI',
  description: 'Template nextjs configurado com NextUI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="nextui-custom-theme">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
