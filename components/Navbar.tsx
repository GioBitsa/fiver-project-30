import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/Logo.png";
import MainButton from "./MainButton";

const linksArray = ["home", "pricing", "features", "about"];

const Navbar = () => {
  return (
    <div className="bg-white shadow-primary">
      <div className="max-w-screen-xl mx-auto py-5 px-4 flex items-center justify-between md:px-8 lg:px-14">
        <div className="flex items-center">
          <Link href="/" className="mr-10">
            <Image className="w-48 object-contain" src={Logo} alt="logo" />
          </Link>
          <ul className="items-center hidden lg:flex">
            {linksArray?.map((item, index) => (
              <li key={index} className="mx-3">
                <Link
                  href="/"
                  className={`py-2 rounded-md capitalize text-base transition hover:opacity-80 ${
                    item === "home"
                      ? "font-bold text-primary-600 bg-primary-50 px-6"
                      : "px-3 text-gray-600"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center hidden lg:flex">
          <MainButton type="secondary" text="Login" className="mr-5" />
          <MainButton type="primary" text="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
