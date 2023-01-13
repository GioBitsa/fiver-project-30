import React from "react";
import UserNavbar from "./UserNavbar";

const UserPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <UserNavbar />
      <div className="max-w-screen-xl py-4 px-4 md:px-8 lg:px-14 mx-auto">
        <p className="text-[11px] font-bold text-gray-300 text-right mb-5">
          Centre hospitalier de Rambouillet
        </p>
        {children}
      </div>
    </>
  );
};

export default UserPageLayout;
