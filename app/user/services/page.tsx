import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import ListIcon from "../../../assets/ListIcon.svg";
import Image from "next/image";
import MainButton from "../../../components/MainButton";

const patientListData = {
  columns: [
    "Nom du services",
    "Responsable chariot",
    "Liste des soignants",
    "Identifiant chariot",
    "Liste des surveillances effectuées",
  ],
  rows: [
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
    ["Réanimation", "wiam.tounsi@gmail.com", "Voir", "167332224456"],
  ],
};

const page = () => {
  return (
    <UserPageLayout>
      <div className="my-5 flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex items-center">
          <div className="p-1 mr-2 bg-[#DDF7EC] rounded-lg">
            <Image className="w-8 mx-auto lg:w-10" src={ListIcon} alt="list" />
          </div>
          <h2 className="text-primaryColor font-bold text-2xl lg:text-3xl">
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
      <div className="bg-white shadow-different py-5 px-5 lg:px-10 rounded-lg">
        <div className="overflow-auto">
          <table className="w-full border-separate border-spacing-y-3 min-w-[900px] overflow-auto">
            <thead>
              <tr>
                {patientListData.columns?.map((text, index) => (
                  <th
                    className="py-2 text-[10px] md:text-[11px] text-gray-700 font-popins font-semibold text-center first:text-left first:font-bold"
                    key={index}
                  >
                    {text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="min-w-full">
              {patientListData.rows?.map((text, index) => (
                <tr key={index}>
                  {text?.map((single, index) => (
                    <td
                      className="py-2 text-[10px] sm:text-[11px] text-gray-700 font-popins font-semibold text-center first:text-left"
                      key={index}
                    >
                      {single}
                    </td>
                  ))}
                  <td className="flex items-center justify-between max-w-[250px] mx-auto">
                    <button className="text-sm font-medium font-popins text-gray-500 border-[1px] rounded-2xl border-gray-500 py-1 px-4 transition hover:opacity-80">
                      Voir
                    </button>
                    <button className="text-sm font-medium font-popins text-red border-[1px] rounded-2xl border-red py-1 px-4 mx-1 transition hover:opacity-80">
                      Supprimer
                    </button>
                    <button className="text-sm font-medium font-popins text-gray-500 border-[1px] rounded-2xl border-gray-500 py-1 px-4 transition hover:opacity-80">
                      Editer
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
