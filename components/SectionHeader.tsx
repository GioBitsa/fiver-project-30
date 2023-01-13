import React from "react";

type SectionHeaderProps = {
  text: String;
};

const SectionHeader = ({ text }: SectionHeaderProps) => {
  return (
    <div className="w-fit mx-auto mb-5">
      <h2 className="font-bold text-2xl text-gray-700 text-center mb-1 md:text-3xl lg:text-4xl">
        {text}
      </h2>
      <div className="h-[7px] w-40 bg-gradient-to-r from-white to-[#1D976C] -translate-x-1/2 rounded" />
    </div>
  );
};

export default SectionHeader;
