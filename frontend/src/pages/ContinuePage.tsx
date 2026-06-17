import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { verifyOtp } from "../services/authApi"
import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"



const ContinuePage = () => {


  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const mobile = localStorage.getItem("mobile") || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (!/^[0-9]*$/.test(val)) return; // allow only digits
    const char = val.slice(-1); // take last digit if user pasted or typed multiple
    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);
    if (char && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Prevent tabbing forward when the current input is empty
    if (e.key === "Tab") {
      if (!e.shiftKey && otp[index] === "") {
        e.preventDefault();
        inputRefs.current[index]?.focus();
        return;
      }
      // allow shift+Tab to go backwards normally
    }
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft") {
      if (index > 0) inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight") {
      if (index < inputRefs.current.length - 1) inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text").trim();
    const digits = paste.replace(/\D/g, "").slice(0, inputRefs.current.length).split("");
    if (digits.length === 0) return;
    const newOtp = [...otp];
    for (let i = 0; i < digits.length; i++) {
      newOtp[i] = digits[i];
      if (inputRefs.current[i]) inputRefs.current[i]!.value = digits[i];
    }
    setOtp(newOtp);
    const nextIndex = Math.min(digits.length, inputRefs.current.length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = async () => {
    try {
      const otpString = otp.join("");

      console.log("Mobile Sent:", mobile);
      console.log("OTP Sent:", otpString);

      const data = await verifyOtp(mobile, otpString);
      console.log("Mobile Sent:", mobile);
      console.log("OTP Sent:", otpString);
      console.log(data);
      if (data.success) {
        alert("otp is verified ");
        localStorage.setItem("mobile", mobile);
        navigate("/"); // move only after success

      }
    }
    catch (error: any) {
      console.log("Full error ", error);
      if (error.response) {
        console.log("Backend Response message :", error.response.data.message);

        alert("Please enter valid OTP");
      }
      else{
        alert("Something went wrong");
      }
    }
  };



  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-pink-100 flex flex-row justify-center items-start px-4 py-10">
        <div className="w-full max-w-sm bg-white rounded-2xl flex flex-col justify-center items-center overflow-hidden">
          <img className="h-58 w-full rounded-sm bg-pink-500" src="9.webp" />
          <div className="w-full flex flex-col justify-start items-start bg-white p-5">
            <h2 className="w-full bg-white text-xl text-black font-semibold flex justify-start">Enter OTP sent to</h2>
            <Link to="/change"><button className="h-8 text-[#9F2089] mt-2 uppercase tracking-wide font-semibold flex justify-center text-sm">
              CHANGE NUMBER
            </button></Link>
            <div className="flex items-end gap-4 w-full mt-4">





              <div className="w-full mt-2 flex flex-col justify-center items-center">
                <div className="h-10 w-full flex flex-row justify-center items-center gap-3 sm:gap-5">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { inputRefs.current[index] = el }}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      className="w-10 text-center border-b border-red-500 outline-none"
                    />
                  ))}
                </div>

                <p className="h-10 w-full flex justify-start text-red-500 text-[14px] mt-2">
                  Enter a 6 digit OTP
                </p>

                <Link to="/change"><button className="h-6 text-[#9F2089] flex flex-row justify-start text-sm font-semibold mt-4 cursor-pointer uppercase mb-4">
                  RESEND OTP
                </button></Link>
              </div>

            </div>
          </div>
          {/* Verify Button */}
          <button onClick={handleVerify}
            className="w-[calc(100%-2.5rem)] h-9 bg-fuchsia-700 hover:bg-fuchsia-800 text-white text-xl font-semibold rounded-sm flex flex-row justify-center"
          >
            Verify OTP
          </button>
          <div className="w-full bg-white px-4 pb-6">
            {/* Terms & Conditions */}
            <div className="mt-8 text-center text-gray-500 text-sm">
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

export default ContinuePage


