import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import QRCode from "../../../assets/QRCode.png";
import PrinterIcon from "../../../assets/PrinterIcon.svg";
import Image from "next/image";
import MainButton from "../../../components/MainButton";
import Link from "next/link";

const columnsArray = [
  {
    header: "Tiroir n°1",
    title: "Equipements en service",
    columns: [
      "Nom de l’equirpement",
      "Présentation",
      "Qte d’equipement",
      "Date d’expiration",
    ],
    rows: [
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
    ],
  },
  {
    header: "Tiroir n°1",
    title: "Equipements en service",
    columns: [
      "Nom de l’equirpement",
      "Présentation",
      "Qte d’equipement",
      "Date d’expiration",
    ],
    rows: [
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
    ],
  },
  {
    header: "Tiroir n°1",
    title: "Equipements en service",
    columns: [
      "Nom de l’equirpement",
      "Présentation",
      "Qte d’equipement",
      "Date d’expiration",
    ],
    rows: [
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
    ],
  },
  {
    header: "Tiroir n°1",
    title: "Equipements en service",
    columns: [
      "Nom de l’equirpement",
      "Présentation",
      "Qte d’equipement",
      "Date d’expiration",
    ],
    rows: [
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
      ["Adrenaline", "5mg/ 5ml ", "10", "10/2023"],
    ],
  },
];

const page = () => {
  return (
    <UserPageLayout>
      <h2 className="my-5 text-primaryColor font-bold text-2xl lg:text-3xl">
        Details du nouveau service
      </h2>
      <div className="bg-white shadow-different py-10 px-5 lg:px-10 rounded-lg">
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <div className="w-full mt-10 md:mt-0 md:max-w-lg">
            <div className="border-b-2 border-gray-50 rounded mb-8">
              <h6 className="text-gray-500 text-sm font-bold mb-3 font-popins">
                Nom du services
              </h6>
              <div className="text-sm text-gray-700 font-medium mb-3 font-popins">
                Prestation 1
              </div>
            </div>
            <div className="border-b-2 border-gray-50 rounded mb-8">
              <h6 className="text-gray-500 text-sm font-bold mb-3 font-popins">
                Identifiant du service
              </h6>
              <div className="text-sm text-gray-700 font-medium mb-3 font-popins">
                63bb6ccae64543566765bbof3455lff
              </div>
            </div>
            <div className="border-b-2 border-gray-50 rounded mb-8">
              <h6 className="text-gray-500 text-sm font-bold mb-3 font-popins">
                créer par :
              </h6>
              <div className="text-sm text-gray-700 font-medium mb-3 font-popins">
                assistant.mcare@gmail.com
              </div>
            </div>
            <div className="border-b-2 border-gray-50 rounded mb-8">
              <h6 className="text-gray-500 text-sm font-bold mb-3 font-popins">
                Responsable :
              </h6>
              <div className="text-sm text-gray-700 font-medium mb-3 font-popins"></div>
            </div>
          </div>
          <div className="w-full max-w-xs">
            <Image
              className="w-52 mx-auto"
              src={QRCode}
              alt="qrcode for details"
            />
            <button className="flex items-center py-3 px-5 bg-gray-50 mx-auto mt-5">
              <Image className="w-4 mr-2" src={PrinterIcon} alt="print" />
              <p className="text-gray-700 font-bold text-sm">imprimer QR</p>
            </button>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {columnsArray?.map((item, index) => (
            <div key={index}>
              <h4 className="text-base mb-2 font-bold font-popins text-gray-700">
                {item.header}
              </h4>
              <div className="border-[1px] border-gray-300 rounded-lg p-5">
                <div className="flex items-center justify-between mb-5">
                  <h5 className="text-sm font-bold font-popins text-gray-500">
                    Equipements en service
                  </h5>
                  <Link
                    className="font-bold text-sm text-gray-700 underline underline-offset-4"
                    href="/user/servicedetails"
                  >
                    Tout voir
                  </Link>
                </div>
                <div className="overflow-y-auto h-[200px]">
                  <table className="min-w-full border-separate border-spacing-y-2">
                    <thead>
                      <tr>
                        {item.columns?.map((text, index) => (
                          <th
                            className="py-2 text-[10px] text-gray-700 font-popins font-semibold text-center first:text-left"
                            key={index}
                          >
                            {text}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="min-w-full">
                      {item.rows?.map((text, index) => (
                        <tr className="bg-gray-50 rounded-md" key={index}>
                          {text?.map((single, index) => (
                            <td
                              className="py-2 text-[10px] text-gray-700 font-popins font-semibold text-center first:pl-2 first:text-left last:pr-2"
                              key={index}
                            >
                              {single}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <MainButton
            uiType="secondary"
            text="Quitter"
            className="mr-5 bg-[#E9E9E9]"
          />
          <MainButton uiType="different" text="Valider" />
        </div>
      </div>
    </UserPageLayout>
  );
};

export default page;
