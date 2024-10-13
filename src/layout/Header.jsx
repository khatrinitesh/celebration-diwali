import React, { useState } from 'react';
// library
import { Link } from 'react-router-dom';
// components
import Sidebar from './Sidebar';

const Header = () => {

   // State for sidebar visibility
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   // Function to toggle the sidebar
   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };

  return (
    <>
    <header className='p-[30px] md:p-[20px] 2xl:p-[40px]'>
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
            <Link className='z-[99]'>
                <img src="../../public/assets/images/icon-back.svg" alt=""  />
            </Link>
            <div className="logoBlock">
                <img src="../../public/assets/images/logo-cadbury.svg" alt="" className='max-w-[100px] md:max-w-[150px]' /> 
            </div>
            <button 
              onClick={toggleSidebar} 
              className="relative z-[999] outline-none cursor-pointer bg-transparent border-none text-white w-[30px] h-[30px] flex flex-col justify-between items-center  p-[2px]"
            >
              <span className={`h-[3px] relative top-[4px] bg-white w-full block transition-transform duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`h-[3px] relative bg-white w-full block transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-[3px] relative top-[-3px] bg-white w-full block transition-transform duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </button>
        </div>
      </div>
    </header>
     {/* Sidebar Component */}
     <Sidebar isOpen={isSidebarOpen} />
    </>
  );
}

export default Header;
