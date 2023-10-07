import React, { useState, useEffect } from "react";

function StickyButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled down
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // You can adjust the scroll threshold (200 in this case)
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling behavior
    });
  };

  return (
    <button
      className={`${
        showButton ? "block" : "hidden"
      } fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer transition-opacity`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
}

export default StickyButton;
