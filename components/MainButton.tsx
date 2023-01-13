import Image from "next/image";
import React from "react";
import RightArrowIcon from "../assets/RightArrowIcon.svg";

type MainButtonProps = {
  text: String;
  uiType: "secondary" | "primary";
  className?: String;
  endIcon?: boolean;
  submit?: boolean;
};

const MainButton = ({
  text,
  className,
  uiType,
  endIcon,
  submit,
}: MainButtonProps) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${className} ${
        endIcon && "flex items-center"
      } py-2 px-6 text-lg transition hover:opacity-80 rounded ${
        uiType === "secondary"
          ? "bg-white text-gray-600"
          : uiType === "primary"
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
