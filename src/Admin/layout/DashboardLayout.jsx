import React,{ useEffect, useState } from "react";
// library
import { Outlet } from "react-router-dom";
// component
import HeaderAdmin from "./Header";
import SidebarAdmin from "./Sidebar";
// import { getDeviceInfo } from '../../utils/getDeviceInfo';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
//   const { deviceType } = getDeviceInfo()

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
  let isCheck =  sessionStorage.getItem('isMobile');
    // console.log(deviceType);
    // if(deviceType==='Mobile' && isCheck=='true'){
    //   sessionStorage.setItem('isMobile', false);
    //   setIsCollapsed(true);
    // }
    document.body.style.backgroundColor = '#f5f5fa'
  });
  return (
    <>
      <div className="appAdminContainer h-[100dvh] w-full flex bg-bgraycolor">
        <SidebarAdmin
          isCollapsed={isCollapsed}
          onToggle={handleSidebarToggle}
        />
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${
            isCollapsed ? "ml-20" : "ml-[200px]"
          }`}
        >
          <HeaderAdmin onToggleSidebar={handleSidebarToggle} />
          <main className={`flex-1 p-4 ${isCollapsed ? 'ml-[0px]' : 'ml-[50px]'}`}>
            <div className="container mx-auto">
                <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
