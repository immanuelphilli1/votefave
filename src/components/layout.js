import React from "react";
import Navbar from "./navigation";
import Footer from "./footer";
import BackToTop from "./backToTop";
import Seo from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Seo />
      <Navbar />
      <main className="bg-gray-800 pt-16 flex-grow">
        <div className="container mx-auto px-6">
        {children}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
