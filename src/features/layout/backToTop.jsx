import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
}

    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-pink-800 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="رجوع لأعلى"
      >
        <FaArrowUp className="text-lg" />
      </button>
    )
  );
}
