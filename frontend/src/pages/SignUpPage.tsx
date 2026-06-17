import Navbar from "../components/Navbar"
import { useState } from "react"

import { loginUser } from "../services/authApi"
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {
  const [mobile,setMobile]=useState("")
   const navigate = useNavigate();

const handleChange = (e:any) =>{
  const value = e.target.value;


   // Allow only numbers
  if (!/^\d*$/.test(value)) return;

  if(value.length>10){
    alert("Mobile number cannot exceed 10 digits ");
    return;

    
  }
  setMobile(value);
}

const handleContinue = async ()=>{
  try{
    console.log("SignUpPage: sending login request", mobile);
    const data = await loginUser(mobile);
    console.log("SignUpPage: login response", data);

    if(data.success){
      navigate("/continue");
    }
    else{
      alert("please retry");
    }

    }
    catch(error){
      console.log("SignUpPage: login error", error);
    }
  }














  return (
    <>
    <Navbar/>
      <div className="min-h-screen w-full bg-pink-100 flex flex-row justify-center items-start px-4 py-10">
        <div className="w-full max-w-sm bg-white rounded-2xl flex flex-col justify-center items-center overflow-hidden">
            <img className="h-58 w-full rounded-sm bg-pink-500" src="9.webp"/>
            <div className="w-full flex flex-col justify-start items-start bg-white p-5">
                <h2 className="w-full bg-white text-md text-black font-semibold mb-6">Sign Up to view your profile</h2>
                     <div className="flex items-end gap-4 w-full">
  
  {/* Country Code */}
  <div className="w-23 border-b border-gray-300 pb-2 ">
    <p className="text-xs text-gray-500 mb-2">Country</p>
    <p className="font-semibold text-md">IN +91</p>
  </div>

  {/* Phone Number */}
  <div className="flex-1 border-b border-gray-300 pb-2">
    <input
      type="tel"
      placeholder="Phone Number"
      value={mobile}
      onChange={handleChange}
      className="w-full outline-none text-md placeholder:text-gray-400"
    />
  </div>

</div>
            </div>
            {/* Continue Button */}
    <button onClick={handleContinue}
      className="w-[calc(100%-2.5rem)] h-10 bg-fuchsia-700 hover:bg-fuchsia-800 text-white text-xl font-semibold rounded-sm"
    >
      Continue
    </button>
             <div className="w-full bg-white px-4 pb-6">
                {/* Terms & Conditions */}
<div className="mt-8 text-center text-[15px] text-gray-500 text-sm">
  By continuing, you agree to Meesho's
  <br />
  <span className="text-fuchsia-700  cursor-pointer text-sm">
    Terms & Conditions
  </span>
  {" "}and{" "}
  <span className="text-fuchsia-700 cursor-pointer text-sm">
    Privacy Policy
  </span>
</div>
                </div>           
        </div>

      </div>
    </>
  )
}

export default SignUpPage
