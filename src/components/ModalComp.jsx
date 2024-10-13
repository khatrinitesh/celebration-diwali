import React from 'react';
// LIBRARY
import { motion, AnimatePresence } from 'framer-motion';

const ModalComp = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <AnimatePresence>
      {isOpen && (
        <motion.div
          className=" fixed inset-0 flex items-center justify-center z-[9999] bg-bgmodaloverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className=" md:max-w-[450px] bg-bgsidebar border-[1px] rounded-[30px] !border-white rounded-br30 w-full relative max-w-[calc(100%-10%)] p-[20px] md:p-[30px]"
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close bg-transparent absolute top-5 right-5 cursor-pointer" onClick={onClose}>
              <img src="../../public/assets/images/icon-close.png" alt="Close" className='img-fluid'/>
            </button>
            <h2 className='smallHeadTitle text-center my-[30px] tracking-wide tracking-ls2 font-gotham-black uppercase text-white'>{title}</h2>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    );
  };
  

export default ModalComp;