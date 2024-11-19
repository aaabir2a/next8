import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "practice next app",
  description: "meta data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
        <ul className="mt-6 flex gap-6">

          <li>
            <Link href="/" >Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/posts">Post</Link>
          </li>


        </ul>
        </nav>

        <hr/>
        {children}
      </body>
    </html>
  );
}
