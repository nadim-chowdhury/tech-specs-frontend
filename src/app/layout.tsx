import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import StoreProvider from "@/providers/store-provider";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechSpecs",
  description:
    "Tech Specs: Your ultimate source for in-depth reviews, detailed specifications, and expert opinions on the latest mobile phones, laptops, cameras, PC hardware, and more. Stay updated with the newest technology trends and make informed decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <section className="app-container">
            <Header />
            <main className="main-content">{children}</main>
            <ToastContainer
              autoClose={3000}
              hideProgressBar
              closeOnClick
              pauseOnHover
              theme="light"
            />
            <Footer />
          </section>
        </StoreProvider>
      </body>
    </html>
  );
}
