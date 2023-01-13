import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import ListIcon from "../../../assets/ListIcon.svg";
import Image from "next/image";

const page = () => {
  return (
    <UserPageLayout>
      <h2 className="my-5 text-primaryColor font-bold text-2xl lg:text-3xl">
        Details du nouveau service
      </h2>
      <div>Here will be table</div>
    </UserPageLayout>
  );
};

export default page;
