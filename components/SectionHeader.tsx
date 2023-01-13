import React from "react";

type SectionHeaderProps = {
  text: String;
  align: "left" | "center" | "right";
};

const SectionHeader = ({ text, align }: SectionHeaderProps) => {
  return (
    <div className="w-fit mx-auto mb-5">
      <h2 className="font-bold text-2xl text-gray-700 text-center mb-1 md:text-3xl lg:text-4xl">
        {text}
      </h2>
      <div
        className={`h-[7px] w-40 bg-gradient-to-r from-white to-[#1D976C] rounded ${
          align === "left"
            ? "-translate-x-1/2 ml-0"
            : align === "center"
            ? "translate-x-0 mx-auto"
            : "translate-x-1/2 ml-auto"
        }`}
      />
    </div>
  );
};

export default SectionHeader;
