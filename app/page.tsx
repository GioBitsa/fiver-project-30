import Image from "next/image";
import React from "react";
import CircleContainer from "../components/CircleContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import BedManagement from "../assets/BedManagement.png";
import MainButton from "../components/MainButton";

const page = () => {
  return (
    <>
      <Navbar />
      {/* bed management section */}
      <div className="relative py-14 overflow-hidden">
        <div className="px-4 mx-auto max-w-screen-xl md:px-8 lg:px-14">
          <SectionHeader text="Hospital Bed Management" />
          <Image
            className="max-w-4xl w-full mx-auto border-4 border-primary-1 rounded-3xl border-solid"
            src={BedManagement}
            alt="bed management"
          />
          <p className="text-gray-500 font-inter text-sm text-center max-w-4xl mx-auto mt-5 mb-10 md:text-base">
            Lorem ipsum dolor sit amet consectetur. Vestibulum ultricies nisi eu
            lectus arcu hac nec metus. Ut quis rhoncus ornare vitae dolor sit.
            Eu lobortis pulvinar mauris donec pharetra egestas vitae turpis
            laoreet. Odio pulvinar ornare eu ornare leo id neque lorem nulla.
          </p>
          <MainButton
            className="mx-auto uppercase block z-10 relative"
            type="primary"
            text="learn more about"
          />
        </div>
        <CircleContainer size="40" className="-top-20 left-10" />
        <CircleContainer
          size="40"
          className="top-1/4 -right-20 md:w-80 md:h-80 md:-right-40"
        />
        <CircleContainer size="40" className="top-3/4 right-20 z-0" />
      </div>
      <Footer />
    </>
  );
};

export default page;
