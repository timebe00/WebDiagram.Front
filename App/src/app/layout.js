import "./globals.css";

export const metadata = {
  title: "ERD",
  description: "Create ERD Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
