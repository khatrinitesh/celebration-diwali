import React from 'react';

const HeadTitle = ({children,className}) => {
  return (
    <div>
      <h2 className={`${className} mb-[20px] text-center text-white font-gotham-black bigheadTitle`}>{children}</h2>
    </div>
  );
}

export default HeadTitle;
