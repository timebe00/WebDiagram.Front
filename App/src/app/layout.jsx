import '@/public/css/globals.css';
import mainFontData from 'next/font/local';

import Header from '@/components/layout/main/Header';
import Footer from '@/components/layout/main/Footer';

const mainFont = mainFontData({
  src: '../public/font/Noto_Sans_KR/NotoSansKR-VariableFont_wght.ttf',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata = {
  title: "ERD",
  description: "Create ERD Web",
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={mainFont.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
