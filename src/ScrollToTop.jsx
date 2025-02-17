import React, { useState, useEffect } from "react";
import scroll from "./assets/home.png";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-30">
          <button
            onClick={scrollToTop}
            className="p-3 w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500 to-pink-500 text-white text-2xl shadow-md border-none cursor-pointer transition duration-300 ease-in-out hover:opacity-80 flex justify-center items-center"
          >
            <img
              loading="lazy"
              src={scroll}
              alt="Scroll to Top"
              className="w-5"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
