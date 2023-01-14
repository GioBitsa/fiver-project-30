import React from "react";
import UserPageLayout from "../../../components/UserPageLayout";
import ListIcon from "../../../assets/ListIcon.svg";
import PlusIcon from "../../../assets/PlusIcon.svg";
import PlusIconWhite from "../../../assets/PlusIconWhite.svg";
import MinusIcon from "../../../assets/MinusIcon.svg";
import Image from "next/image";

const page = () => {
  const inputStyling =
    "text-sm text-gray-200 bg-gray-50 py-3 px-3 w-full focus:outline-none rounded";

  const labelStyling =
    "text-sm text-gray-500 font-popins font-semibold mb-3 inline-block";

  const secondaryButtonStyling =
    "w-full flex items-center justify-center py-3 px-5 rounded bg-gray-50 text-gray-500 font-bold text-base transition hover:opacity-80";

  const primaryButtonStyling =
    "flex items-center justify-center py-3 px-5 rounded bg-gradient-to-br from-differentGradientFrom via-differentGradientVia to-differentGradientTo text-white font-bold text-base transition hover:opacity-80";

  return (
    <UserPageLayout>
      <div className="my-5 flex items-center">
        <div className="p-1 mr-2 bg-[#DDF7EC] rounded-lg">
          <Image className="w-8 mx-auto lg:w-10" src={ListIcon} alt="list" />
        </div>
        <h2 className="text-primaryColor font-bold text-2xl lg:text-3xl">
          creer un nouveau service
        </h2>
      </div>
      <div className="bg-white shadow-different py-5 px-5 lg:px-10 lg:py-10 rounded-lg">
        <h5 className="font-bold text-gray-700 text-[14px] font-popins mb-2">
          Nom du service
        </h5>
        <input
          className="text-sm text-gray-200 bg-gray-50 py-3 px-3 w-full mb-8"
          value="Type du services"
          type="text"
          disabled
        />
        <h5 className="font-bold text-gray-700 text-[14px] font-popins mb-2">
          Ajouter du contenu
        </h5>
        <div className="p-3 border-[1px] border-gray-300 rounded-lg mb-5">
          <h6 className="text-[13px] font-bold font-popins text-gray-500 mb-5">
            Tiroir numéro 1
          </h6>
          <div className="flex flex-col lg:items-center justify-between mb-14 lg:flex-row">
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="serviceNumber" className={`${labelStyling}`}>
                Nom de l’equirpement
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="serviceNumber"
                placeholder="Nom du services"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="presentation" className={`${labelStyling}`}>
                Prséentation
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="presentation"
                placeholder="Prséentation"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="qunatity" className={`${labelStyling}`}>
                Quantité
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="qunatity"
                placeholder="Qte en unitine"
              />
            </div>
            <div>
              <label htmlFor="date" className={`${labelStyling}`}>
                Date d’expiration
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="flex flex-col md:items-center justify-between md:flex-row">
            <div className="flex items-center mb-5 md:mb-0">
              <button className={`${secondaryButtonStyling} mr-5`}>
                <Image className="w-6 mr-2" src={PlusIcon} alt="plus" />
                Ajouter
              </button>
              <button className={`${secondaryButtonStyling}`}>
                <Image className="w-6 mr-2" src={MinusIcon} alt="minus" />
                Supprimer
              </button>
            </div>
            <button className={`${primaryButtonStyling}`}>
              <Image className="w-6 mr-2" src={PlusIconWhite} alt="plus" />
              Configurer le tiroir 1
            </button>
          </div>
        </div>
        <div className="p-3 border-[1px] border-gray-300 rounded-lg mb-5">
          <h6 className="text-[13px] font-bold font-popins text-gray-500 mb-5">
            Tiroir numéro 2
          </h6>
          <div className="flex flex-col lg:items-center justify-between mb-14 lg:flex-row">
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="serviceNumber" className={`${labelStyling}`}>
                Nom de l’equirpement
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="serviceNumber"
                placeholder="Nom du services"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="presentation" className={`${labelStyling}`}>
                Prséentation
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="presentation"
                placeholder="Prséentation"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="qunatity" className={`${labelStyling}`}>
                Quantité
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="qunatity"
                placeholder="Qte en unitine"
              />
            </div>
            <div>
              <label htmlFor="date" className={`${labelStyling}`}>
                Date d’expiration
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="flex flex-col md:items-center justify-between md:flex-row">
            <div className="flex items-center mb-5 md:mb-0">
              <button className={`${secondaryButtonStyling} mr-5`}>
                <Image className="w-6 mr-2" src={PlusIcon} alt="plus" />
                Ajouter
              </button>
              <button className={`${secondaryButtonStyling}`}>
                <Image className="w-6 mr-2" src={MinusIcon} alt="minus" />
                Supprimer
              </button>
            </div>
            <button className={`${primaryButtonStyling}`}>
              <Image className="w-6 mr-2" src={PlusIconWhite} alt="plus" />
              Configurer le tiroir 2
            </button>
          </div>
        </div>
        <div className="p-3 border-[1px] border-gray-300 rounded-lg mb-5">
          <h6 className="text-[13px] font-bold font-popins text-gray-500 mb-5">
            Tiroir numéro 3
          </h6>
          <div className="flex flex-col lg:items-center justify-between mb-14 lg:flex-row">
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="serviceNumber" className={`${labelStyling}`}>
                Nom de l’equirpement
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="serviceNumber"
                placeholder="Nom du services"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="presentation" className={`${labelStyling}`}>
                Prséentation
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="presentation"
                placeholder="Prséentation"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="qunatity" className={`${labelStyling}`}>
                Quantité
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="qunatity"
                placeholder="Qte en unitine"
              />
            </div>
            <div>
              <label htmlFor="date" className={`${labelStyling}`}>
                Date d’expiration
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="flex flex-col md:items-center justify-between md:flex-row">
            <div className="flex items-center mb-5 md:mb-0">
              <button className={`${secondaryButtonStyling} mr-5`}>
                <Image className="w-6 mr-2" src={PlusIcon} alt="plus" />
                Ajouter
              </button>
              <button className={`${secondaryButtonStyling}`}>
                <Image className="w-6 mr-2" src={MinusIcon} alt="minus" />
                Supprimer
              </button>
            </div>
            <button className={`${primaryButtonStyling}`}>
              <Image className="w-6 mr-2" src={PlusIconWhite} alt="plus" />
              Configurer le tiroir 3
            </button>
          </div>
        </div>
        <div className="p-3 border-[1px] border-gray-300 rounded-lg mb-5">
          <h6 className="text-[13px] font-bold font-popins text-gray-500 mb-5">
            Tiroir numéro 4
          </h6>
          <div className="flex flex-col lg:items-center justify-between mb-14 lg:flex-row">
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="serviceNumber" className={`${labelStyling}`}>
                Nom de l’equirpement
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="serviceNumber"
                placeholder="Nom du services"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="presentation" className={`${labelStyling}`}>
                Prséentation
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="presentation"
                placeholder="Prséentation"
              />
            </div>
            <div className="mb-5 lg:mb-0 lg:mr-5">
              <label htmlFor="qunatity" className={`${labelStyling}`}>
                Quantité
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="qunatity"
                placeholder="Qte en unitine"
              />
            </div>
            <div>
              <label htmlFor="date" className={`${labelStyling}`}>
                Date d’expiration
              </label>
              <input
                type="text"
                className={`${inputStyling}`}
                id="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="flex flex-col md:items-center justify-between md:flex-row">
            <div className="flex items-center mb-5 md:mb-0">
              <button className={`${secondaryButtonStyling} mr-5`}>
                <Image className="w-6 mr-2" src={PlusIcon} alt="plus" />
                Ajouter
              </button>
              <button className={`${secondaryButtonStyling}`}>
                <Image className="w-6 mr-2" src={MinusIcon} alt="minus" />
                Supprimer
              </button>
            </div>
            <button className={`${primaryButtonStyling}`}>
              <Image className="w-6 mr-2" src={PlusIconWhite} alt="plus" />
              Configurer le tiroir 4
            </button>
          </div>
        </div>
        <button
          className={`${primaryButtonStyling} mt-10 ml-auto mr-auto md:mr-0 w-full sm:w-[initial]`}
        >
          <Image className="w-6 mr-2" src={PlusIconWhite} alt="plus" />
          Ajouter un tiroir
        </button>
      </div>
    </UserPageLayout>
  );
};

export default page;
