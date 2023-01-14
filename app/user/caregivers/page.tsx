import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import ListIcon from "../../../assets/ListIcon.svg";
import Image from "next/image";
import MainButton from "../../../components/MainButton";

const caregiversArray = {
  columns: ["Nom du soignant", "E-mail", "Role", "Service Assigne", "Actions"],
  rows: [
    [
      "Wiam Tounsi",
      "wiam.tounsi@gmail.com",
      "super-administrateur",
      "63bb6ccae64543566765bbof3455lff",
    ],
    [
      "Wiam Tounsi",
      "wiam.tounsi@gmail.com",
      "super-administrateur",
      "63bb6ccae64543566765bbof3455lff",
    ],
    [
      "Wiam Tounsi",
      "wiam.tounsi@gmail.com",
      "super-administrateur",
      "63bb6ccae64543566765bbof3455lff",
    ],
    [
      "Wiam Tounsi",
      "wiam.tounsi@gmail.com",
      "super-administrateur",
      "63bb6ccae64543566765bbof3455lff",
    ],
    [
      "Wiam Tounsi",
      "wiam.tounsi@gmail.com",
      "super-administrateur",
      "63bb6ccae64543566765bbof3455lff",
    ],
  ],
};

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
      <div className="bg-white shadow-different py-5 px-5 lg:px-10 rounded-lg">
        <div className="overflow-auto">
          <table className="w-full border-separate border-spacing-y-3 min-w-[900px] overflow-auto">
            <thead>
              <tr>
                {caregiversArray.columns?.map((text, index) => (
                  <th
                    className="py-2 text-[10px] md:text-[11px] text-gray-700 font-popins font-semibold text-left first:font-bold"
                    key={index}
                  >
                    {text}
                  </th>
                ))}
                <th>
                  <button className="bg-[#FCECEC] text-sm font-bold font-popins text-[#BF2323] py-1 px-4 transition opacity-60 hover:opacity-80">
                    Mot de passe
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="min-w-full">
              {caregiversArray.rows?.map((text, index) => (
                <tr key={index}>
                  {text?.map((single, index) => (
                    <td
                      className="py-2 text-[10px] sm:text-[11px] text-gray-700 font-popins font-semibold text-left"
                      key={index}
                    >
                      {single}
                    </td>
                  ))}
                  <td>
                    <button className="text-sm font-medium font-popins text-gray-500 border-[1px] rounded-2xl border-gray-500 py-1 px-4 transition hover:opacity-80">
                      Editer
                    </button>
                  </td>
                  <td>
                    <button className="bg-[#FCECEC] text-sm font-bold font-popins text-[#BF2323] py-1 px-4 transition opacity-60 hover:opacity-80 flex mx-auto">
                      Reinitialiser
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default page;
