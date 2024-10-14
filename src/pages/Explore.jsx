import React, { useState,useRef,useEffect } from "react";
// library
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-toastify/dist/ReactToastify.css";

// constants
import { DESTINATION_OPTIONS, ORIGIN_OPTIONS } from "../constants/constants";
// components
import BtnPrimary from "../components/BtnPrimary";
import FieldSelect from "../components/FieldSelect";
import Preloader from "../components/Preloader";
import DatePickerComp from "../components/DatePicker";
import UseScrollToTop from "../components/ScrollTop";

const Explore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fromOrigin: "",
    toOrigin: "",
    date: "Tue, 03 Oct", // default date or empty if no default
    message: "", // new state field for textarea
  });

  UseScrollToTop();

  const textareaRef = useRef(null);

  useEffect(() => {
      const textarea = textareaRef.current;

      const handleFocus = () => {
          setTimeout(() => {
              if (textarea) {
                  textarea.scrollTop = textarea.scrollHeight; // Adjust scroll position if needed
              }
          }, 0); // Delay to allow the browser to process focus
      };

      if (textarea) {
          textarea.addEventListener('focus', handleFocus);
      }

      return () => {
          if (textarea) {
              textarea.removeEventListener('focus', handleFocus);
          }
      };
  }, []);

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.fromOrigin) {
      toast.error("Please select the 'From' origin.");
      return;
    }

    if (!formData.toOrigin) {
      toast.error("Please select the 'To' destination.");
      return;
    }

    if (!formData.date) {
      toast.error("Please select a date.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please provide a message.");
      return;
    }

    // If validation passes
    setIsLoading(true);
    toast.success("Form submitted successfully!");

    // Log form data to console
    console.log("Form Data Submitted:", formData);

    // Simulate submission and navigation
    setTimeout(() => {
      setIsLoading(false);
      navigate("/thankyou"); // Navigate to the thank you page
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
 

  return (
    <>
      
      {isLoading && <Preloader />}
      <form onSubmit={handleSubmit}>
        <div className="date-range-picker border-[2px] border-tertiarycolor rounded-[20px] ">
          {/* From Origin */}
          <FieldSelect
            label="From"
            id="from-origin"
            name="fromOrigin"
            options={ORIGIN_OPTIONS}
            onChange={handleInputChange}
          />

          {/* To Destination */}
          <FieldSelect
            label="To"
            id="to-origin"
            name="toOrigin"
            options={DESTINATION_OPTIONS}
            onChange={handleInputChange}
          />

          {/* Datepicker */}
          <div className="result p-[20px]  flex items-center justify-between border-b-tertiarycolor border-b-[2px]">
            <p className="text-tertiarycolor justify-center relative cursor-pointer flex items-center font-gotham-medium m-0">
              <img src="../../public/assets/images/icon-calendar.svg" alt="" className="iconDate w-[20px] h-[20px]  me-[10px]" />
              <DatePickerComp/>
              {/* <span className="inline-block txtDate relative ">Tue, 03 Oct</span> */}
            </p>
          </div>


          {/* MESSAGE COMMENT */}
          <div className="messageBlock p-[20px]">
          <textarea ref={textareaRef} rows={2} placeholder="Why do you want to be home for Diwali?" className="md:py-0 placeholder:text-[rgba(89,46,124,.5)] w-full outline-none overflow-hidden fieldTextara  text-tertiarycolor resize-none font-gotham-medium "  >
          </textarea>
          </div>
        </div>

        <div className="relative mt-[20px] btnBlock flex items-center justify-center">
          <BtnPrimary>SUBMIT</BtnPrimary>
        </div>
      </form>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
        limit={1}
        position="top-center"
      />
    </>
  );
};

export default Explore;
