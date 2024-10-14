import React, { useState, useEffect } from "react";
import HeadTitleComp from "../../components/HeadTitle";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { adminDashbaord } from '../../services/fpdAPI';
import {  useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};




const Dashboard = () => {
  const [data, setData] = useState([]);
  const [alldata, allsetData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function
  // Filtering Data
  const filterData = () => {
    // const fromDate = new Date(startDate);
    // const toDate = new Date(endDate);
    // const year = fromDate.getFullYear();
    // const month = String(fromDate.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month, so add 1
    // const day = String(fromDate.getDate()).padStart(2, '0');
    // const FromDateFinal = `${year}-${month}-${day}`;

    // const year1 = toDate.getFullYear();
    // const month1 = String(toDate.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month, so add 1
    // const day1 = String(toDate.getDate()).padStart(2, '0');
    // const toDateFinal = `${year1}-${month1}-${day1}`;
    // getDashboard(FromDateFinal, toDateFinal);
  };

  useEffect(() => {
    // const getStatus = localStorage.getItem('pLoginStatus');
    // if(getStatus != 'SuccessAdminLogin'){
    //   navigate('/admin-user');
    // } 
    
    // sessionStorage.setItem('isMobile', true);
    // const currentDate = new Date();

    // const formateDate = currentDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    // setStartDate(formateDate); // Auto set to current date
    // setEndDate(formateDate);

    // const year = currentDate.getFullYear();
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month, so add 1
    // const day = String(currentDate.getDate()).padStart(2, '0');

    // const formattedDate = `${year}-${month}-${day}`;
  
    // getDashboard(formattedDate, formattedDate); // Call the async function
}, []);

// const getDashboard = async (fromDate, toDate) => {
//   const data = {fromDate: fromDate, toDate:toDate};
//     if(data.fromDate != null && data.toDate != null) {
//         const response = await adminDashbaord(data);
//         setData('');
//         allsetData('');
//         response.data.map(item => {
//           let group = item.GroupName;
//           if (group === "Date Wise") {
//             setData(prevData => [...prevData, item]);
//           }
//           if (group === "Overall Total") {
//             allsetData(prevData => [...prevData, item]);
//           }
//         });
        
//     }
// };


  return (
    <>
    
      <div className="content">
        <h2
          className="mb-[20px] uppercase tracking-ls2 !font-arial !text-black  !text-[24px] !font-bold text-start">Overall Total</h2>
         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* All */}
        {alldata.map((item, index) => (
            
            <motion.div
              className="card gap-2 grid  shadow bg-white p-5 rounded-[20px]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }} key={index}
            >
              {/* <span className="border-[3px] border-[#00acee] iconBlock shadow-bs1 aspect-square mx-auto bg-bgcolor rounded-full w-[60px] h-[60px] flex items-center justify-center">
                  
                <FaWindows className="text-[24px] text-[#00acee]" />
              
              </span> */}
              <span className="txtNumber font-arial font-bold text-[24px] text-black text-center">
                {item.Total}
              </span>
              <h3 className="font-arial uppercase text-[16px] font-bold text-center justify-center">{item.Name}</h3>
            </motion.div>
         ))}
         </div>
<br></br><br></br>
<HeadTitleComp
          headtitle="Date Wise"
          className="mb-[20px] uppercase tracking-ls2 !font-arial !text-black  !text-[24px] !font-bold text-start"
        />
<div className="flex flex-wrap gap-4 items-center mb-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="From Date"
          dateFormat="yyyy-MM-dd"
          className="p-2 border rounded"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="To Date"
          dateFormat="yyyy-MM-dd"
          className="p-2 border rounded"
        />
        <button
          onClick={filterData}
          className="bg-blue-500 w-[200px] text-center justify-center text-white px-4 py-2 rounded flex items-center gap-2"
        >
          Filter
        </button>
      </div>
      <br></br>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* All */}
        {data.map((item, index) => (
            
            <motion.div
              className="card gap-2 grid  shadow bg-white p-5 rounded-[20px]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }} key={index}
            >
              <span className="txtNumber font-arial font-bold text-[24px] text-black text-center justify-center">
                {item.Total}
              </span>
              <h3 className="font-arial uppercase text-[16px] font-bold text-center justify-center">{item.Name}</h3>
            </motion.div>
         ))}

        

        
      </div>
      </div>
    </>
  );
};

export default Dashboard;
