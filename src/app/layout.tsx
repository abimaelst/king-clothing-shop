import '../../assets/css/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { NavBarComponent } from '@/components/NavBar/NavBarComponent';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'King Clothing',
  description: 'The besting Clothing shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NavBarComponent />
        {children}
      </body>
    </html>
  );
}
