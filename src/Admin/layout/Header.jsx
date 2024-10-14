import React, { useState } from "react";
// library
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const HeaderAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function
  const filterData = () => {
    localStorage.removeItem('pLoginStatus');
    navigate('admin-user');
  }
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="bg-white py-5 shadow-bs1">
      <div className="container mx-auto px-[1rem] flex items-center justify-between">
        <div className="logoBlock">
          <img
            src="../../../public/assets/images/headlogo.png"
            className="max-w-[80px] lg:max-w-[120px]"
          />
        </div>
        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="py-2 px-4 bg-white rounded-lg hover:bg-gray-300 flex items-center"
          >
            <span className="font-avenir uppercase text-[16px] tracking-ls1 text-gray-600">
              Admin
            </span>
            <FaChevronDown
              className={`ml-2 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="text-center">
                  <li onClick={filterData}>
                    <div 
                      className="block font-avenir uppercase tracking-ls1 text-[14px] w-full text-left py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
