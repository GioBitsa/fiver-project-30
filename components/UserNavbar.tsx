import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserNavbarLogo from "../assets/UserNavbarLogo.png";
import DownArrowIcon from "../assets/DownArrowIcon.svg";
import NavbarSearch from "./NavbarSearch";
import NavbarProfile from "./NavbarProfile";

const UserNavbar = () => {
  return (
    <div className="bg-white shadow-primary">
      <div className="max-w-screen-xl mx-auto py-5 px-4 flex items-center justify-between md:px-8 lg:px-14">
        <Link href="/user/services" className="mr-10">
          <Image
            className="w-32 object-contain md:w-48"
            src={UserNavbarLogo}
            alt="logo"
          />
        </Link>
        <ul className="items-center hidden lg:flex">
          <li className="mx-4">
            <Link
              href="/user/services"
              className="py-2 text-sm text-gray-700 font-bold transition hover:opacity-80 uppercase"
            >
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="/user/services"
              className="flex items-center py-2 text-sm text-gray-700 transition hover:opacity-80 uppercase"
            >
              features
              <Image className="ml-1 w-4" src={DownArrowIcon} alt="dropwdown" />
            </Link>
          </li>
        </ul>
        <div className="items-center flex">
          <NavbarSearch />
          <div className="flex items-center ml-3 mr-5 cursor-pointer">
            <p className="font-bold text-sm text-gray-500">FR</p>
            <Image className="ml-1 w-4" src={DownArrowIcon} alt="dropwdown" />
          </div>
          <NavbarProfile userOnline />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
