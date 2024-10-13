import React, { useEffect, useState } from "react";
// LIBRARY
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// COMPONENTS
import ModalComp from "./../components/ModalComp";

const Sidebar = ({ isOpen }) => {
  const [isExperienceModalOpen, setExperienceModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  // Framer Motion animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };
  // Apply overflow-hidden class to body when sidebar is open
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="sidebarFullScreen text-center flex-col flex justify-between items-center p-[50px] bg-bgsidebar fixed inset-0 h-full w-full  z-[99]"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="logoBlock flex items-center justify-center p-4">
          <img
            src="../../public/assets/images/celebrations-confirmedseat.svg"
            alt="Celebration Confirm Seat"
          />
        </div>
        <ul className="listBullet p-4 gap-[30px] grid ">
          <li>
            <button
              onClick={() => setExperienceModalOpen(true)}
              className="text-white font-gotham-black linkNav"
            >
              How it works
            </button>
          </li>
          <li>
            <button
              onClick={() => setTermsModalOpen(true)}
              className="text-white font-gotham-black linkNav"
            >
              Terms & Conditions
            </button>
          </li>
          <li>
            <NavLink
              // to="javascript:void()"
              className="text-white font-gotham-black linkNav"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              // to="javascript:void()"
              className="text-white font-gotham-black linkNav"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
        <div className="footBlock p-4 gap-[20px] grid">
          <img
            src="../../public/assets/images/mondelez.svg"
            alt="Mondelez"
            className="block mx-auto"
          />
          <span className="txtCopyright inline-block whitespace-nowrap leading-normal text-[rgba(255,255,255,.4)] font-gotham-medium text-[11px]">
            ©Mondelez International. All Rights Reserved.
          </span>
        </div>
      </motion.div>

      {/* Modals */}
      <ModalComp
        isOpen={isExperienceModalOpen}
        onClose={() => setExperienceModalOpen(false)}
        title="How it works"
      >
        <div className="verticalScrollbar overflow-auto h-[calc(100%-300px)]">
          <ul className="listBullet grid gap-4 text-start">
            <li>
              <span className="txtDesc font-gotham-medium text-white tracking-ls1">
                STEP 1: CHOOSE YOUR PREFERRED LANGUAGE.
              </span>
            </li>
            <li>
              <span className="txtDesc font-gotham-medium text-white tracking-ls1">
                STEP 2: SELECT THE BOX SIZE YOU HAVE. (MAKE SURE IT'S A
                SPECIAL-EDITION CABDURY MINATURES DIWALI BOX)
              </span>
            </li>
            <li>
              <span className="txtDesc font-gotham-medium text-white tracking-ls1">
                STEP 3: GRANT CAMERA ACCESS. POINT YOUR CAMERA AT THE BOX
              </span>
            </li>
            <li>
              <span className="txtDesc font-gotham-medium text-white tracking-ls1">
                STEP 4: AND WATCH A HEARTWARMING DIWALI STORY COME TO LIFE.
              </span>
            </li>
          </ul>
        </div>
      </ModalComp>

      <ModalComp
        isOpen={isTermsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title="Terms & Conditions"
      >
        <div className="verticalScrollbar overflow-y-auto h-[calc(100dvh-200px)] pe-3">
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

export default Sidebar;
