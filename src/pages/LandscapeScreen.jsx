import React from "react";

const LandscapeScreen = () => {
  return (
    <div className="landscapewrapper fixed inset-0 w-full h-full bg-btnprimary text-center z-[9999999] flex items-center justify-center">
      <div className="box w-full gap-5 flex flex-col absolute inset-0  items-center justify-center">
        <div className="logo1  items-center justify-center flex">
          <img
            src="../../public/assets/images/logo-cadbury.svg"
            alt="Cal Scan"
            title="Cal Scan"
            className="h-auto w-full"
          />
        </div>
        <h2 className="text-[32px] text-white font-gotham-black text-center tracking-ls2">
          Best View in Portrait Mode
        </h2>
      </div>
    </div>
  );
};

export default LandscapeScreen;
