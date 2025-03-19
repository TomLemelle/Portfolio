"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
