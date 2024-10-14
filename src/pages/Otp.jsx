import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify here
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../components/Preloader";
import HeadTitle from "../components/HeadTitle";
import FieldInput from "../components/FieldInput";
import BtnPrimary from "../components/BtnPrimary";

const Otp = ({ onSubmit,setActiveStep }) => {
  // Make sure to accept onSubmit as a prop
  const TIMER = 30;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(TIMER);
  const [resendSendBefore, setResendSendBefore] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const handleOtpChange = (e) => {
    const { value } = e.target;

    if (/^\d{0,4}$/.test(value)) {
      setOtp(value);
    }
  };

  const resendOTP = async () => {
    // Your logic for resending OTP goes here...
  };

  useEffect(() => {
    const sendOTP = async () => {
      // Your logic for sending OTP goes here...
    };

    sendOTP(); // Call the async function

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted OTP:", otp);
    setActiveStep(3)

    // if (otp === "1234") {
    //   try {
    //     setIsLoading(true);
    //     // Your existing API call...
    //     toast.success("Submitted successfully!", {
    //       toastId: "submitSuccess",
    //     });
    //     setIsLoading(false); // Set loading to false before calling onSubmit
    //     onSubmit(); // This should call setActiveStep(3) in Details
    //   } catch (error) {
    //     setIsLoading(false);
    //     toast.error("Incorrect OTP Entered");
    //   }
    // } else {
    //   toast.error("Invalid OTP! Please enter 1234.");
    // }
  };

  return (
    <>
      {isLoading && <Preloader />}
      <HeadTitle className="!text-tertiarycolor detailsheadTitle">
        Enter OTP to proceed
      </HeadTitle>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="formGroup relative">
          <FieldInput
            spellCheck={false}
            id="otp"
            name="otp"
            type="tel"
            value={otp}
            onChange={handleOtpChange}
            placeholder="ENTER OTP"
            autoComplete="off"
            maxLength={4}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
        <div className="txtResendOTP flex flex-col items-center justify-center text-center gap-[15px]">
          <span className="underline cursor-pointer block txtResent text-[rgba(0,0,0,.45)] font-gotham-medium text-[1.27vh] md:text-[.625vw]">
            {!resendSendBefore && (
              <span
                onClick={() => resendOTP()}
                className="txtCounter ms-1"
                disabled={timeRemaining !== 0}
              >
                Resend OTP
              </span>
            )}
            {timeRemaining > 0 && (
              <>
                {!resendSendBefore && (
                  <span className="txtCounter me-1 ms-1">in</span>
                )}
                <span className="textSemibold">{timeRemaining}s</span>
              </>
            )}
          </span>
          <span className="underline cursor-pointer block txtResent text-[rgba(0,0,0,.45)] font-gotham-medium text-[1.27vh] md:text-[.625vw]">
            Wrong number entered?
          </span>
        </div>
        <div className="mt-[20px] relative flex items-center justify-center">
          <BtnPrimary>SUBMIT OTP</BtnPrimary>
        </div>
      </form>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
      />{" "}
      {/* Ensure ToastContainer is present */}
    </>
  );
};

export default Otp;
