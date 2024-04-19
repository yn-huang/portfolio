import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

export const metadata = {
  title: "Portfolio | Yinuo Huang",
  description: "Yinuo Huang's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
