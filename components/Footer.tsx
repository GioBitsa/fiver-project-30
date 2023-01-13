import React from "react";
import MainButton from "./MainButton";
import FooterLogo from "../assets/FooterLogo.png";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "../assets/FacebookIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import LocationIcon from "../assets/LocationIcon.svg";
import MailIcon from "../assets/MailIcon.svg";

const socialsArray = [
  {
    src: FacebookIcon,
    path: "/",
    alt: "facebook",
  },
  {
    src: TwitterIcon,
    path: "/",
    alt: "twitter",
  },
  {
    src: InstagramIcon,
    path: "/",
    alt: "instagram",
  },
  {
    src: LinkedinIcon,
    path: "/",
    alt: "linkedin",
  },
];

const navigationArray = [
  {
    text: "About Us",
    path: "/",
  },
  {
    text: "Carrier",
    path: "/",
  },
  {
    text: "We are hiring",
    path: "/",
  },
];

const featuresArray = [
  {
    text: "Business Marketing",
    path: "/",
  },
  {
    text: "User Analytic",
    path: "/",
  },
  {
    text: "Live Chat",
    path: "/",
  },
];

const contactArray = [
  {
    text: "(808) 555-0111",
    path: "/",
    src: PhoneIcon,
  },
  {
    text: "4517 Washington Ave. Manchester, Kentucky 39495",
    path: "/",
    src: LocationIcon,
  },
  {
    text: "debra.holt@example.com",
    path: "/",
    src: MailIcon,
  },
];

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-xl px-4 mx-auto translate-y-20 md:px-8 lg:px-14">
        <div className="shadow-secondary bg-white rounded-md p-5 flex flex-col items-center lg:flex-row">
          <div className="w-full pr-0 lg:pr-10">
            <h6 className="capitalize font-sm text-primary-600 font-bold">
              newsletter
            </h6>
            <h3 className="font-bold uppercase text-[#091510] text-3xl my-1 lg:text-4xl">
              JOIN US
            </h3>
            <p className="text-sm text-gray-600">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="w-full pt-5 lg:pt-0 lg:pl-10 flex items-center">
            <input
              placeholder="Your Email"
              type="email"
              className="h-[44px] text-sm text-gray-600 bg-primary-50 w-full px-3 focus:outline-none"
            />
            <MainButton uiType="primary" text="subscribe" />
          </div>
        </div>
      </div>
      <div className="pt-[80px] bg-gradient-to-b from-gradientFrom via-gradientVia to-gradientTo text-white">
        <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-8 lg:px-14">
          <div className="flex flex-col justify-between sm:flex-row">
            <Link href="/">
              <Image className="w-56" src={FooterLogo} alt="footer logo" />
            </Link>
            <div className="my-4 sm:my-0">
              <h6 className="text-white font-bold text-lg text-center mb-2 sm:text-right">
                follow us:
              </h6>
              <div className="flex items-center justify-center">
                {socialsArray?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="mx-2 p-1 last:mr-0 transition hover:opacity-80"
                  >
                    <Image src={item.src} alt={item.alt} className="w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between my-5 md:flex-row">
            <ul>
              <h6 className="font-bold text-base text-white my-5">
                Company Info
              </h6>
              {navigationArray?.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={item.path}
                    className="font-bold text-sm text-white p-2 border block capitalize md:p-0 md:border-none md:inline-block"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="font-bold text-base text-white my-5">Features</h6>
              {featuresArray?.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={item.path}
                    className="font-bold text-sm text-white p-2 border block capitalize md:p-0 md:border-none md:inline-block"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="md:max-w-[200px]">
              <h6 className="font-bold text-base text-white my-5">
                Get In Touch Us
              </h6>
              {contactArray?.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={item.path}
                    className="font-bold flex items-center text-sm text-white p-2 border  capitalize md:p-0 md:border-none"
                  >
                    <Image
                      className="w-5 mr-2"
                      src={item.src}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-between py-5 px-4 max-w-screen-xl mx-auto sm:flex-row md:px-8 lg:px-14">
        <p className="text-gray-600 font-inter font-bold text-sm md:mr-2 lg:text-base">
          All Rights Reserved
        </p>
        <p className="text-gray-600 font-inter font-bold text-base md:mr-2 lg:text-lg">
          © 2023 hoshpicheck
        </p>
        <p className="text-gray-600 font-inter font-bold text-sm lg:text-base ">
          Terms and Condition
        </p>
      </div>
    </div>
  );
};

export default Footer;
