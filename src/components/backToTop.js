import { CaretDoubleUp } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#84C53E] text-white p-2 rounded-lg shadow-lg hover:bg-gray-500 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <CaretDoubleUp size={24} />
    </button>
  );
};

export default BackToTop;
