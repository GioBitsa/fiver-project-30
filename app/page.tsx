import Image from "next/image";
import React from "react";
import CircleContainer from "../components/CircleContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import BedManagement from "../assets/BedManagement.png";
import ThirdSection from "../assets/ThirdSection.png";
import FourthSection from "../assets/FourthSection.png";
import RectangleIcon from "../assets/RectangleIcon.svg";
import Inventare from "../assets/Inventare.png";
import MainButton from "../components/MainButton";

const page = () => {
  return (
    <>
      <Navbar />
      {/* bed management section */}
      <div className="relative py-14 overflow-hidden">
        <div className="px-4 mx-auto max-w-screen-xl md:px-8 lg:px-14">
          <SectionHeader align="left" text="Hospital Bed Management" />
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
            endIcon
          />
        </div>
        <CircleContainer size="40" className="-top-20 left-10" />
        <CircleContainer
          size="40"
          className="top-1/4 -right-20 md:w-80 md:h-80 md:-right-40"
        />
        <CircleContainer size="40" className="top-3/4 right-20 z-0" />
      </div>
      {/* Chariot d'urgence section */}
      <div className="relative py-14 overflow-hidden">
        <div className="px-4 mx-auto max-w-screen-xl flex flex-col min-h-[400px] items-end md:px-8 lg:px-14 2xl:min-h-[700px]">
          <Image
            className="relative left-0 top-0 max-w-xl w-full mx-auto border-4 border-primary-1 rounded-3xl border-solid bg-white lg:absolute lg:-left-24 lg:top-[56px] lg:w-70 2xl:max-w-4xl 2xl:-left-10"
            src={ThirdSection}
            alt="third section"
          />
          <div className="pt-10 lg:max-w-lg">
            <SectionHeader align="center" text="Chariot d'urgence" />
            <p className="text-gray-500 text-base font-inter mt-5 mb-10 text-center lg:text-right">
              Lorem ipsum dolor sit amet consectetur. Vestibulum ultricies nisi
              eu lectus arcu hac nec metus. Ut quis rhoncus ornare vitae dolor
              sit. Eu lobortis pulvinar mauris donec pharetra egestas vitae
              turpis laoreet. Odio pulvinar ornare eu ornare leo id neque lorem
              nulla.
            </p>
            <MainButton
              type="primary"
              text="learn more about"
              endIcon
              className="uppercase ml-auto mr-auto lg:mr-0 block"
            />
          </div>
        </div>
      </div>
      {/* questionnaire satifaction section */}
      <div className="relative py-14 overflow-hidden">
        <div className="px-4 mx-auto max-w-screen-xl flex flex-col min-h-[500px] md:px-8 lg:px-14 2xl:min-h-[800px]">
          <Image
            className="z-10 relative right-0 top-0 max-w-xl w-full mx-auto border-4 border-primary-1 rounded-3xl border-solid bg-white lg:absolute lg:-right-24 lg:top-[56px] lg:w-70 2xl:max-w-4xl 2xl:-right-10"
            src={FourthSection}
            alt="third section"
          />
          <div className="pt-10 lg:max-w-lg">
            <SectionHeader align="center" text="Questionnaire Satifaction" />
            <p className="text-gray-500 text-base font-inter mt-5 mb-10 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur. Vestibulum ultricies nisi
              eu lectus arcu hac nec metus. Ut quis rhoncus ornare vitae dolor
              sit. Eu lobortis pulvinar mauris donec pharetra egestas vitae
              turpis laoreet. Odio pulvinar ornare eu ornare leo id neque lorem
              nulla. Odio pulvinar ornare eu ornare leo id neque lorem nulla.
            </p>
            <MainButton
              type="primary"
              text="learn more about"
              endIcon
              className="uppercase ml-auto mr-auto lg:ml-0 block relative z-10"
            />
          </div>
        </div>
        <CircleContainer size="80" className="top-1/2 -left-40 z-0" />
        <Image
          className="absolute top-0 right-0 w-2/3 h-2/3 z-0"
          src={RectangleIcon}
          alt="rectangle"
        />
      </div>
      {/* inventare section */}
      <div className="py-14">
        <div className="px-4 mx-auto max-w-screen-xl md:px-8 lg:px-14">
          <SectionHeader align="right" text="Inventaire patient" />
          <p className="text-center font-inter text-base text-gray-500 mb-10">
            Lorem ipsum dolor sit amet consectetur. Vestibulum ultricies nisi eu
            lectus arcu hac nec metus. Ut quis rhoncus ornare vitae dolor sit.
            Eu lobortis pulvinar mauris donec pharetra egestas vitae turpis
            laoreet. Odio pulvinar ornare eu ornare leo id neque lorem nulla.
          </p>
          <Image
            className="bg-white max-w-4xl w-full mx-auto border-4 border-primary-1 rounded-3xl border-solid shadow-primary"
            src={Inventare}
            alt="bed management"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
