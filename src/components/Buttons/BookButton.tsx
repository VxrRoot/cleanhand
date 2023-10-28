import React from "react";

const BookButton = () => {
  return (
    <button className="h-10 bg-yellow whitespace-nowrap text-black rounded-md py-2 px-4 before:ease relative  overflow-hidden   shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-30 before:duration-700  hover:before:-translate-x-48">
      Rezerwuj sprzątanie
    </button>
  );
};

export default BookButton;
