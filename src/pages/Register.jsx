import React, { useState } from "react";
// library
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { useNavigate } from "react-router-dom";

// components
import Preloader from "../components/Preloader";
import HeadTitle from "../components/HeadTitle";
import FieldInput from "../components/FieldInput";
import CheckboxComp from "./../components/CheckboxComp";
import BtnPrimary from "../components/BtnPrimary";

const Register = ({ onSubmit, setActiveStep }) => {
  // Receive onSubmit as a prop
  // const navigate = useNavigate(); // Initialize the navigate function
  const [formValues, setFormValues] = useState({
    mobile: "",
    name: "",
    email: "",
  });
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Update the handleChange function to validate inputs as they are typed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });


    // if (name === "name") {
    //   // const cleanedName = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 30); // No special chars, max 30
    //   setFormValues({ ...formValues, [name]: cleanedName });
    // } else if (name === "mobile") {
    //   const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10); // Only numbers, max 10 digits
    //   setFormValues({ ...formValues, [name]: numericValue });
    // } else if (name === "name") {
    //   const cleanedName = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 30); // No special chars, max 30
    //   setFormValues({ ...formValues, [name]: cleanedName });
    // } else if (name === "email") {
    //   const cleanedEmail = value.replace(/[^a-zA-Z0-9@._-]/g, "").slice(0, 35); // Basic cleanup for email
    //   setFormValues({ ...formValues, [name]: cleanedEmail });
    // }
  };

  const handleCheckboxChange = (id) => {
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // Validation function with detailed validation for each input
  const validateForm = () => {
    // let isValid = true;
    // const errorToastId = "error-toast"; // Unique toast ID for errors

    // const { mobile, name, email } = formValues;
    // // Check for required fields and other specific validation conditions
    // if (name == " ") {
    //   alert("name");
    //   toast.error("Name is required and must be between 3 and 30 characters.", {
    //     toastId: errorToastId,
    //   });
    //   isValid = false;
    // } else if (/[^a-zA-Z\s]/.test(name)) {
    //   toast.error("Name must not contain numbers or special characters.", {
    //     toastId: errorToastId,
    //   });
    //   isValid = false;
    // }

    // if (!mobile || mobile.length !== 10) {
    //   toast.error("Phone number is required and must be 10 digits.", {
    //     toastId: errorToastId,
    //   });
    //   isValid = false;
    // }

    // if (!email) {
    //   toast.error("Email is required.", { toastId: errorToastId });
    //   isValid = false;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   toast.error("Please enter a valid email address.", {
    //     toastId: errorToastId,
    //   });
    //   isValid = false;
    // }

    // if (!selectedCheckboxes.includes("checkbox1")) {
    //   toast.error("You must agree to the terms and conditions.", {
    //     toastId: errorToastId,
    //   });
    //   isValid = false;
    // }

    // if (!selectedCheckboxes.includes("checkbox2")) {
    //   toast.error("You must agree to receive promotional emails.", {
    //     toastId: errorToastId,
    //   });
    //   isValid = false;
    // }

    // return isValid;
  };

  const handleSubmit = (e) => {
    // alert();
    e.preventDefault();
    setActiveStep(2)
    
    // if (validateForm()) {
    //   // Show success notification and log form data to the console
    //   toast.success("Form submitted successfully!", {
    //     toastId: "submitSuccess",
    //   });
    //   console.log("Form Values:", formValues);

    //   setIsLoading(true);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     onSubmit(); // Call the onSubmit prop to move to the next step
    //   }, 2000); // Simulating form submission delay
    // }
  };

  return (
    <>
      {isLoading && <Preloader />}
      <HeadTitle className="!text-tertiarycolor detailsheadTitle">Enter your details</HeadTitle>
      <form onSubmit={handleSubmit} className="grid formRegister gap-[15px]">
        <div className="formGroup relative">
          <FieldInput
            spellCheck={false} // Disable spell checking
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="off"
            variants="primary"
            maxLength={30}
          />
        </div>
        <div className="formGroup relative">
          <FieldInput
            spellCheck={false} // Disable spell checking
            id="mobile"
            name="mobile"
            type="tel"
            value={formValues.mobile}
            onChange={handleChange}
            placeholder="Phone number"
            autoComplete="off"
            maxLength={10}
            inputMode="numeric"
            variants="primary"
          />
        </div>
        <div className="formGroup relative">
          <FieldInput
            spellCheck={false} // Disable spell checking
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="off"
            maxLength={35}
            variants="primary"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <CheckboxComp
            id="checkbox1"
            label="I agree to the terms and conditions"
            checked={selectedCheckboxes} // Pass the array here
            onChange={() => handleCheckboxChange("checkbox1")}
          />
          <CheckboxComp
            id="checkbox2"
            label="I agree to receive promotional emails"
            checked={selectedCheckboxes} // Pass the array here
            onChange={() => handleCheckboxChange("checkbox2")}
          />
        </div>
        <div className="relative mt-[10px] flex items-center justify-center">
          <BtnPrimary>PROCEED</BtnPrimary>
        </div>
      </form>
      <ToastContainer /> {/* Render ToastContainer to display toasts */}
    </>
  );
};

export default Register;
