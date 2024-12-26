import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <div id="modalRoot" />
      </body>
    </html>
  );
}
