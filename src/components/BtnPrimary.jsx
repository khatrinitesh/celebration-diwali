import React from 'react';

const BtnPrimary = ({children,onClick,className}) => {
  return (
    <>
      <button onClick={onClick} className={`${className}  rounded-[30px] h-[40px] font-gotham-black uppercase btnStandard bg-btnprimary tracking-[1.2px]  text-white px-6`}>{children}</button>
    </>
  );
}

export default BtnPrimary;
