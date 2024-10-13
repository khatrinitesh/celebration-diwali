import React from "react";

// components
import BtnPrimary from "../components/BtnPrimary";
import UseScrollToTop from "../components/ScrollTop";
// pages
import LandscapeScreen from "./LandscapeScreen";


const ThankYou = () => {

  UseScrollToTop(); // Apply the scroll-to-top hook
  return (
    <>
      <div className="thankyouBlock bg-bgty bg-cover bg-no-repeat bg-center  h-[100dvh]">
        <div className=" inset-0 absolute w-screen h-screen flex items-center justify-center flex-col">
          <img src="../../public/assets/images/thankyougradient.png" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="content z-[9] grid gap-2 absolute bottom-[30px] left-1/2 translate-x-[-50%] max-w-[300px] w-full text-center">
          <img src="../../public/assets/images/celebrations-confirmedseat.svg" alt="" className="block mx-auto" />
          <h2 className="tyheadTitle text-white font-gotham-black ">THANK YOU!</h2>
          <p className="tytxtdesc m-0 text-white font-gotham-medium ">We'll notify you if you are one of <br/> the lucky winners!</p>
          <BtnPrimary className='mt-2 border-white border-[1.2px] inline-flex items-center justify-center  mx-auto'>SHARE 
            <span className="iconShare">
              <img src="../../public/assets/images/icon-share.svg" alt="" className="ms-3" />
            </span>
          </BtnPrimary>
        </div>
      </div>
       {/*================= START Best View in Portrait Mobile Mode  =================*/}
       <LandscapeScreen/>
      {/*================= END Best View in Portrait Mobile Mode =================*/}
    </>
  );
};

export default ThankYou;
