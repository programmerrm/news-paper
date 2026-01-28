import { Noto_Serif_Bengali } from "next/font/google";
import "../globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${notoSerifBengali.variable} antialiased`}>
      {children}
    </div>
  );
}