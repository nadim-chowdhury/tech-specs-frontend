import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import StoreProvider from "@/providers/store-provider";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ToastContainer } from "react-toastify";
// import AnimatePresenceProvider from "@/providers/animate-presence-provider";
// import TransitionsProvider from "@/providers/transitions-provider";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechSpecs",
  description:
    "Tech Specs Mag: Your ultimate source for in-depth reviews, detailed specifications, and expert opinions on the latest mobile phones, laptops, cameras, PC hardware, and more. Stay updated with the newest technology trends and make informed decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <StoreProvider>
          {/* <AnimatePresenceProvider> */}
          <Header />
          {/* <TransitionsProvider> */}
          {children}
          <ToastContainer />
          {/* </TransitionsProvider> */}
          <Footer />
          {/* </AnimatePresenceProvider> */}
        </StoreProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
