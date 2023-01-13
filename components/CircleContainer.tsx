import Image from "next/image";
import React from "react";
import CircleIcon from "../assets/CircleIcon.svg";

type CircleContainerProps = {
  size: string;
  className?: string;
};

const CircleContainer = ({ size, className }: CircleContainerProps) => {
  return (
    <div className={`absolute w-${size} h-${size} ${className}`}>
      <Image src={CircleIcon} alt="circle" />
    </div>
  );
};

export default CircleContainer;
