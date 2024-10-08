import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contactnav from "@/components/Contactnav";
import CartProvider from "@/context/CartContext";
import WishlistProvider from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Contactnav />
        <CartProvider>
          <WishlistProvider>
            <AuthProvider>
              <main className="bg-[#FFFFFF]">
                <Navbar />
                {children}
              </main>
            </AuthProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
