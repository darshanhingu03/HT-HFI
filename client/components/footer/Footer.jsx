import React, { useState, useEffect } from "react";

const Footer = () => {
  // ... (existing code for tracking scroll position)

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-end items-center">
        <div className="mr-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MenuCrafter. All Rights Reserved.
          </p>
          <p className="text-sm">
            <a
              className="text-blue-200 hover:text-blue-400"
              href="tel:+123456789"
            >
              Phone: +91 7041928040
            </a>{" "}
            |{" "}
            <a
              className="text-blue-200 hover:text-blue-400"
              href="mailto:contact@company.com"
            >
              Email: shaikhsahal4@gmail.com
            </a>
          </p>
        </div>
        {/* Scroll-to-top button removed */}
      </div>
    </footer>
  );
};

export default Footer;
