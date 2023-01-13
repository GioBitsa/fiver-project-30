import Image from "next/image";
import React from "react";
import SearchIcon from "../assets/SearchIcon.svg";

const NavbarSearch = () => {
  return (
    <div className="relative border-[1px] border-gray-300 rounded-md max-w-[200px] hidden sm:block">
      <input
        type="text"
        className="w-full text-base font-medium py-1 pl-7 pr-2 text-gray-300 focus:outline-none rounded-md"
        placeholder="Search"
      />
      <Image
        className="w-4 absolute top-1/2 left-2 -translate-y-1/2"
        src={SearchIcon}
        alt="search"
      />
    </div>
  );
};

export default NavbarSearch;
