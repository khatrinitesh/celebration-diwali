import React from "react";
// library
import { useNavigate } from "react-router-dom";
// components
import BtnPrimary from "../components/BtnPrimary";
import UseScrollToTop from "../components/ScrollTop";
// pages
import LandscapeScreen from "./LandscapeScreen";

const Welcome = () => {
  UseScrollToTop(); // Apply the scroll-to-top hook

  const navigate = useNavigate();

  // Define the function to handle button click
  const handleGetStartedClick = () => {
    navigate("/details"); // Replace '/target-route' with the actual path you want to navigate to
  };

  return (
    <>
      <div className="welcomeBlock bg-bgWelcome bg-center bg-cover bg-no-repeat h-[100dvh]">
        <div className="absolute w-screen h-screen flex items-center justify-center flex-col">
          <img
            src="../../public/assets/images/welcomegradient.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="content grid gap-6 z-[9] absolute bottom-[30px] left-1/2 translate-x-[-50%] max-w-[300px] w-full text-center">
          <img
            src="../../public/assets/images/celebrations-confirmedseat.svg"
            alt=""
            className="block mx-auto"
          />
          <BtnPrimary
            className="mt-2 border-white border-[1.2px] inline-flex items-center justify-center mx-auto"
            onClick={handleGetStartedClick} // Add the onClick handler here
          >
            GET STARTED
          </BtnPrimary>
        </div>
      </div>
      {/*================= START Best View in Portrait Mobile Mode  =================*/}
      <LandscapeScreen />
      {/*================= END Best View in Portrait Mobile Mode =================*/}
    </>
  );
};

export default Welcome;
