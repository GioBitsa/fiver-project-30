import React from "react";

type MainButtonProps = {
  text: String;
  type: "secondary" | "primary";
  className?: String;
};

const MainButton = ({ text, className, type }: MainButtonProps) => {
  return (
    <button
      className={`${className} py-2 px-6 text-lg transition hover:opacity-80 rounded ${
        type === "secondary"
          ? "bg-white text-gray-600"
          : type === "primary"
          ? "bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo text-white font-bold"
          : ""
      }`}
    >
      {text}
    </button>
  );
};

export default MainButton;
