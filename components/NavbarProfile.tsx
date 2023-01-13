import Image from "next/image";
import React from "react";
import Profile from "../assets/Profile.png";
import DownArrowIcon from "../assets/DownArrowIcon.svg";

type NavbarProfile = {
  userOnline: boolean;
};

const NavbarProfile = ({ userOnline }: NavbarProfile) => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="relative w-10 h-10">
        <Image className="w-full h-full" src={Profile} alt="profile" />
        {userOnline && (
          <div className="rounded-full w-3 h-3 border-2 border-white bg-primaryColor absolute bottom-0 right-0" />
        )}
      </div>
      <Image className="ml-1 w-4" src={DownArrowIcon} alt="dropdown" />
    </div>
  );
};

export default NavbarProfile;
