import React, { useState } from "react";
// LIBRARY
import { Link } from "react-router-dom";
// COMPONENT
import ModalComp from "./ModalComp";

const CheckboxComp = ({ id, label, checked, onChange }) => {
  // Check if the checkbox should be checked based on the passed checked prop
  const isChecked = () =>
    Array.isArray(checked) ? checked.includes(id) : false;

  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  return (
    <>
      <div className="checkboxBlock py-1 gap-1 relative z-10 grid">
        <div className="flex items-start space-x-2 leading-[14px]">
          <input
            type="checkbox"
            id={id}
            checked={isChecked()}
            onChange={() => onChange(id)}
            className="hidden"
          />
          <label
            htmlFor={id}
            className={`w-[22px] h-[22px] flex items-center justify-center rounded-[3px] border-2 border-tertiarycolor cursor-pointer ${
              isChecked()
                ? "bg-tertiarycolor border-transparent"
                : "bg-transparent"
            } transition-colors duration-300 ease-in-out`}
          >
            {isChecked() && (
              <svg
                className="w-4 h-4 text-white animate-checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </label>
          <span className="txtFieldChk leading-[15px] w-[calc(100%-20px)] block text-black font-gotham-medium tracking-ls2 ">
            {label}
            {id === "checkbox1" && (
              <>
                I accept{" "}
                <Link
                  onClick={() => setTermsModalOpen(true)}
                  className="!underline text-black underline-offset-2"
                >
                  T&Cs
                </Link>{" "}
                AND{" "}
                <Link to="/" className="!underline text-black  underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                of Mondelez (Cadbury).
              </>
            )}
            {id === "checkbox2" && (
              <>
                I consent to receiving promotional communication from Mondelez
                (Cadbury) about its products & offers.
              </>
            )}
          </span>
        </div>
      </div>

      <ModalComp
        isOpen={isTermsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title="Terms & Conditions"
      >
        <div className="verticalScrollbar overflow-y-auto h-[calc(100vh-200px)] pe-3">
          <p className="text-white font-gotham-medium txtDesc">
            Laboris non eu Lorem in eiusmod reprehenderit veniam occaecat
            pariatur exercitation ipsum excepteur. Adipisicing eu nostrud labore
            consequat Lorem tempor anim voluptate aliqua ex cupidatat. Est
            consectetur proident minim elit pariatur. Do occaecat fugiat irure
            nisi deserunt aute sit esse. Ipsum deserunt incididunt laborum
            cillum ad sit proident ipsum fugiat. Aliqua ea deserunt fugiat do
            proident mollit ullamco proident. Adipisicing id sint ipsum aliquip
            ad excepteur. Esse aliquip irure non excepteur duis minim dolore
            anim sit consequat amet est nulla consequat. Exercitation dolore
            amet incididunt culpa sit cupidatat sit dolore minim. Eiusmod
            ullamco culpa occaecat aliquip veniam duis ipsum qui non consequat
            minim. Proident et et nisi cupidatat nulla velit eiusmod nulla sit
            sit nisi incididunt.
          </p>
          <p className="text-white font-gotham-medium txtDesc">
            Laboris non eu Lorem in eiusmod reprehenderit veniam occaecat
            pariatur exercitation ipsum excepteur. Adipisicing eu nostrud labore
            consequat Lorem tempor anim voluptate aliqua ex cupidatat. Est
            consectetur proident minim elit pariatur. Do occaecat fugiat irure
            nisi deserunt aute sit esse. Ipsum deserunt incididunt laborum
            cillum ad sit proident ipsum fugiat. Aliqua ea deserunt fugiat do
            proident mollit ullamco proident. Adipisicing id sint ipsum aliquip
            ad excepteur. Esse aliquip irure non excepteur duis minim dolore
            anim sit consequat amet est nulla consequat. Exercitation dolore
            amet incididunt culpa sit cupidatat sit dolore minim. Eiusmod
            ullamco culpa occaecat aliquip veniam duis ipsum qui non consequat
            minim. Proident et et nisi cupidatat nulla velit eiusmod nulla sit
            sit nisi incididunt.
          </p>
          <p className="text-white font-gotham-medium txtDesc">
            Laboris non eu Lorem in eiusmod reprehenderit veniam occaecat
            pariatur exercitation ipsum excepteur. Adipisicing eu nostrud labore
            consequat Lorem tempor anim voluptate aliqua ex cupidatat. Est
            consectetur proident minim elit pariatur. Do occaecat fugiat irure
            nisi deserunt aute sit esse. Ipsum deserunt incididunt laborum
            cillum ad sit proident ipsum fugiat. Aliqua ea deserunt fugiat do
            proident mollit ullamco proident. Adipisicing id sint ipsum aliquip
            ad excepteur. Esse aliquip irure non excepteur duis minim dolore
            anim sit consequat amet est nulla consequat. Exercitation dolore
            amet incididunt culpa sit cupidatat sit dolore minim. Eiusmod
            ullamco culpa occaecat aliquip veniam duis ipsum qui non consequat
            minim. Proident et et nisi cupidatat nulla velit eiusmod nulla sit
            sit nisi incididunt.
          </p>
          <p className="text-white font-gotham-medium txtDesc">
            Laboris non eu Lorem in eiusmod reprehenderit veniam occaecat
            pariatur exercitation ipsum excepteur. Adipisicing eu nostrud labore
            consequat Lorem tempor anim voluptate aliqua ex cupidatat. Est
            consectetur proident minim elit pariatur. Do occaecat fugiat irure
            nisi deserunt aute sit esse. Ipsum deserunt incididunt laborum
            cillum ad sit proident ipsum fugiat. Aliqua ea deserunt fugiat do
            proident mollit ullamco proident. Adipisicing id sint ipsum aliquip
            ad excepteur. Esse aliquip irure non excepteur duis minim dolore
            anim sit consequat amet est nulla consequat. Exercitation dolore
            amet incididunt culpa sit cupidatat sit dolore minim. Eiusmod
            ullamco culpa occaecat aliquip veniam duis ipsum qui non consequat
            minim. Proident et et nisi cupidatat nulla velit eiusmod nulla sit
            sit nisi incididunt.
          </p>
          <p className="text-white font-gotham-medium txtDesc">
            Laboris non eu Lorem in eiusmod reprehenderit veniam occaecat
            pariatur exercitation ipsum excepteur. Adipisicing eu nostrud labore
            consequat Lorem tempor anim voluptate aliqua ex cupidatat. Est
            consectetur proident minim elit pariatur. Do occaecat fugiat irure
            nisi deserunt aute sit esse. Ipsum deserunt incididunt laborum
            cillum ad sit proident ipsum fugiat. Aliqua ea deserunt fugiat do
            proident mollit ullamco proident. Adipisicing id sint ipsum aliquip
            ad excepteur. Esse aliquip irure non excepteur duis minim dolore
            anim sit consequat amet est nulla consequat. Exercitation dolore
            amet incididunt culpa sit cupidatat sit dolore minim. Eiusmod
            ullamco culpa occaecat aliquip veniam duis ipsum qui non consequat
            minim. Proident et et nisi cupidatat nulla velit eiusmod nulla sit
            sit nisi incididunt.
          </p>
        </div>
      </ModalComp>
    </>
  );
};

export default CheckboxComp;
