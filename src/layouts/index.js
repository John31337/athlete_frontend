import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children, page }) {
  return (
    <>
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </>
  )
}
