import React from 'react';

const Preloader = () => {
  return (
    <div className='flex items-center z-[99999] justify-center fixed inset-0 w-full h-full bg-bgmodaloverlay'>
       <div className="spinner"></div>
    </div>
  );
}

export default Preloader;
