import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

const inter = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Richard_J",
  description: "This is my developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
