import React from "react";

// library
import { FaTachometerAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SidebarAdmin = ({ isCollapsed, onToggle }) => {
  return (
    <motion.aside
      className={`bg-primarycolor z-[99] text-white p-3 fixed top-0 left-0 h-full ${
        isCollapsed ? "w-20px]" : "w-[200px]"
      }`}
      animate={{ width: isCollapsed ? "90px" : "200px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-end mb-4">
        <button
          onClick={onToggle}
          className="text-white text-xl px-2 outline-none border-none"
        >
          <MdMenu />
        </button>
      </div>
      <nav>
        <ul className="listBullet m-0 p-0">
          <li className="mb-2">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex items-center justify-center py-2 px-[0] rounded ${
                  isActive
                    ? "bg-[#00071a] text-white"
                    : "hover:bg-[#00071a]"
                }`
              }
            >
              <FaTachometerAlt className="text-xl" />
              <span className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
                Dashboard
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};

export default SidebarAdmin;
