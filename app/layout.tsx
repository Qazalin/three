import { Kodchasan, Open_Sans } from "@next/font/google";
import classNames from "classnames";

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
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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
        {" "}
        {children}
      </body>
    </html>
  );
}
