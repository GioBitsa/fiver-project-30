import Image from "next/image";
import React from "react";
import CircleContainer from "./CircleContainer";
import UserNavbar from "./UserNavbar";
import SmallCircles from "../assets/SmallCircles.svg";

const UserPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <UserNavbar />
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl py-4 px-4 md:px-8 lg:px-14 mx-auto min-h-[calc(100vh_-_85px)] relative z-10">
          <p className="text-[11px] font-bold text-gray-300 text-right mb-5">
            Centre hospitalier de Rambouillet
          </p>
          {children}
        </div>
        <CircleContainer
          size="40"
          className="-bottom-10 -left-10 w-40 h-40 lg:w-80 lg:h-80 lg:-left-20 lg:-bottom-20"
        />
        <Image
          className="absolute w-20 top-5 -right-10 lg:w-40 lg:-right-20"
          src={SmallCircles}
          alt="small circles"
        />
      </div>
    </>
  );
};

export default UserPageLayout;
