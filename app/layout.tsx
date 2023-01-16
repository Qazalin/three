import { Kodchasan, Open_Sans } from "@next/font/google";
import classNames from "classnames";
import Navbar from "./Navbar";

const kodchasan = Kodchasan({
  weight: "400",
  subsets: ["latin"],
  variable: "--head-font",
});

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--sans-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          kodchasan.variable,
          openSans.variable,
          "bg-black text-white"
        )}
      >
        <Navbar />
        <div className="mt-10 px-5">{children}</div>
      </body>
    </html>
  );
}
