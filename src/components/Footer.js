import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer text-center">
      <p>© {new Date().getFullYear()} Adorn. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
