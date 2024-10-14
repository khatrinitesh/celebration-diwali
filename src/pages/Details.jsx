import React, { useEffect, useState } from "react";
// library
import { Link } from "react-router-dom";
// components
import HeadTitle from "../components/HeadTitle";
import Otp from "./Otp";
import Register from "./Register";
import Explore from "./Explore";
import UseScrollToTop from "../components/ScrollTop";

const Details = () => {
  UseScrollToTop(); // Apply the scroll-to-top hook

  // State to manage the active step
  const [activeStep, setActiveStep] = useState(1); // Default to step 1

  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add("detailsBody");

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("detailsBody");
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <div className="container mx-auto !px-0">
        <div className="detailsBlock md:max-w-[424px]  mx-auto relative">
          <HeadTitle className="mb-[10px]">Register</HeadTitle>
          <ul className="listBulletLine px-[24px] md:px-[100px] flex gap-[14px] mb-[25px]">
            <li>
              <Link
                className={`linkLine inline-flex ${
                  activeStep >= 1 ? "activeLine" : ""
                }`}
              ></Link>
            </li>
            <li>
              <Link
                className={`linkLine inline-flex ${
                  activeStep >= 2 ? "activeLine" : ""
                }`}
              ></Link>
            </li>
            <li>
              <Link
                className={`linkLine inline-flex ${
                  activeStep >= 3 ? "activeLine" : ""
                }`}
              ></Link>
            </li>
          </ul>

          <div className="innerDetails min-h-[100dvh] md:min-h-[410px] 2xl:min-h-[433px] bg-white rounded-tl-[20px] rounded-tr-[20px] md:rounded-[20px] py-[20px] 2xl:py-[40px] px-[24px] md:px-[42px]">
            {/* Step 1: Register */}
            <div
              className={`step1 ${activeStep === 3? "" : "hidden"}`} // Add hidden here
              id="step1"
            >
              <Register onSubmit={() => setActiveStep(2)} />{" "}
              {/* Pass setActiveStep */}
            </div>

            {/* Step 2: OTP */} 
            <div
              className={`step2 ${activeStep === 2 ? "" : "hidden"}`} // Remove hidden here
              id="step2"
            >
              <Otp onSubmit={() => setActiveStep(3)} />
            </div>

            {/* Step 3: Explore */}
            <div
              className={`step3 ${activeStep === 1  ? "" : "hidden"}`}
              id="step3"
            >
              <Explore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
