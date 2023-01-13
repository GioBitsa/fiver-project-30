import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import ListIcon from "../../../assets/ListIcon.svg";
import Image from "next/image";
import MainButton from "../../../components/MainButton";

const page = () => {
  return (
    <UserPageLayout>
      <div className="my-5 flex flex-col justify-between md:flex-row lg:items-center">
        <div className="flex items-center">
          <div className="p-1 mr-2 bg-[#DDF7EC] rounded-lg">
            <Image className="w-8 mx-auto lg:w-10" src={ListIcon} alt="list" />
          </div>
          <h2 className="text-primaryColor font-bold text-2xl lg:text-3xl">
            liste des Soignants
          </h2>
        </div>
        <MainButton
          uiType="different"
          text="Ajouter un nouveau service"
          className="mt-5 md:mt-0"
        />
      </div>
      <div>Here will be table</div>
    </UserPageLayout>
  );
};

export default page;
