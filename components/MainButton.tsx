import Image from "next/image";
import React from "react";
import RightArrowIcon from "../assets/RightArrowIcon.svg";

type MainButtonProps = {
  text: String;
  type: "secondary" | "primary";
  className?: String;
  endIcon?: boolean;
};

const MainButton = ({ text, className, type, endIcon }: MainButtonProps) => {
  return (
    <button
      className={`${className} ${
        endIcon && "flex items-center"
      } py-2 px-6 text-lg transition hover:opacity-80 rounded ${
        type === "secondary"
          ? "bg-white text-gray-600"
          : type === "primary"
          ? "bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo text-white font-bold"
          : ""
      }`}
    >
      {text}
      {endIcon && (
        <Image className="w-6 ml-2" src={RightArrowIcon} alt="icon" />
      )}
    </button>
  );
};

export default MainButton;
