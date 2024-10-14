import React,{useState} from 'react';

// library
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CS
import {  useNavigate } from "react-router-dom";

// COMPONENTS
import HeadTitleComp from '../../components/HeadTitle';
import BtnPrimary from '../../components/BtnPrimary';
import FieldInput from '../../components/FieldInput';

// import { adminLogin } from '../../services/fpdAPI';

const AdminLogin = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleNext = () => {
    navigate('/dashboard')
  }
  

  const handleLogin = async(e) => {
    e.preventDefault();
    // if (!username) {
    //   toast.error('Username is required');
    //   return;
    // }
    // if (!password) {
    //   toast.error('Password is required');
    //   return;
    // }
    // try {
    //     const params =  {
    //       loginId:username,
    //       loginPass:password
    //     };
    //      // Proceed with login logic (e.g., API call)
    //       const response = await adminLogin(params);
    //       // console.log(response);
    //       if(response.data.pLoginStatus=='Success'){
    //         localStorage.setItem('pLoginStatus', 'SuccessAdminLogin');
    //       toast.success('Login successful!');
    //       // Redirect to OTP page
    //       navigate('/dashboard'); // Replace '/otp-page' with the path to your OTP page
    //       }else{
    //         localStorage.setItem('pLoginStatus', 'Invalid');
    //         toast.error("Invalid username or password!");
    //       }
    //   } catch (error) {
    //     localStorage.setItem('pLoginStatus', 'Invalid');
    //     toast.error("Invalid username or password!");
    //   }

  };
  return (
    <div className='adminContent h-screen w-screen grid items-center justify-center  bg-bgadmincolor'>
      <div className='innerAdmin container px-[1rem] w-screen mx-auto'>
        <div className="loginAdminBlock lg:min-w-[70vw] mx-auto shadow-bs1 w-full max-w-full lg:max-w-[100vw] bg-secondarycolor rounded-[10px] flex items-center overflow-hidden h-[500px] justify-center">
            <div className='leftContent  p-5  w-full lg:w-[40%] gap-10 grid text-center'>
                <img src="../../../public/assets/images/logo-cadbury.svg" className='max-w-[100px] mx-auto relative'/>
                <h2 className="text-white text-[24px] font-bold">Login to Admin Dashboard</h2>
                <form className='grid gap-5'  onSubmit={handleLogin}>
                    <div className='fieldGrp'>
                    <FieldInput 
                  placeholder="UserName" 
                  className="!text-start shadow-bs1 !text-black h-[40px] !text-[16px] border-[#ddd]" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                    </div>
                    <div className='fieldGrp'>
                    <FieldInput 
                  placeholder="Password" 
                  type="password" 
                  className="!text-start shadow-bs1 !text-black h-[40px] !text-[16px] border-[#ddd]" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                    </div>
                    <BtnPrimary onClick={handleNext} className="">LOGIN</BtnPrimary>
                </form>
                <ToastContainer position="top-center"   limit={1} /> 
            </div>
            <div className='rightContent hidden lg:block bg-red-200 h-full relative w-[calc(100%-40%)]'>
                <div className="wallpaper absolute inset-0 top-0 w-full h-full">
                    <span className='overlay absolute inset-0 w-full h-full bg-overlaycolor z-[99]'></span>
                    <img src='../../../public/assets/images/login-bg.jpg' className='absolute inset-0 max-w-full w-full h-full object-cover'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
