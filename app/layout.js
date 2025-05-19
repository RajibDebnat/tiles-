
import "./globals.css";

// const PoetsenOne = Poetsen_One({
//   weight: ["400"],
//   variable: "--font-Poetsen_One",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Empower Media",
 
  description: "Created by Empower Media Agency & Rajib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
