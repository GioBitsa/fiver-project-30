import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import ListIcon from "../../../assets/ListIcon.svg";
import Image from "next/image";
import MainButton from "../../../components/MainButton";

const page = () => {
  return (
    <UserPageLayout>
      <div className="my-5 flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex items-center">
          <div className="p-1 mr-2 bg-[#DDF7EC] rounded-lg">
            <Image className="w-8 mx-auto lg:w-10" src={ListIcon} alt="list" />
          </div>
          <h2 className="text-primaryColor font-bold text-2xl md:text-3xl">
            Liste des services
          </h2>
        </div>
        <div className="flex flex-col mt-5 sm:flex-row sm:items-center lg:mt-0">
          <MainButton
            uiType="different"
            text="Accédez au dashbord"
            className="mb-5 sm:mb-0 sm:mr-5"
          />
          <MainButton uiType="different" text="Ajouter un nouveau service" />
        </div>
      </div>
      <div>Here will be table</div>
    </UserPageLayout>
  );
};

export default page;
