import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OtpVerification.css";

const OTPVerification = ({ setIsAuthenticated }) => {
  // State to store the OTP
  const [otp, setOtp] = useState("");

  // Hook from react-router-dom to navigate to a different page
  const navigate = useNavigate();

  // Ref to reference the OTP input field
  const otpRef = useRef(null);

  // Function to verify the OTP
  const verify_otp = (e) => {
    e.preventDefault();
    const enteredOtp = otpRef.current.value;
    // Perform OTP verification logic here
    // For simplicity, assume the entered OTP is "123456"
    if (enteredOtp === "123456") {
      setIsAuthenticated(true);
      navigate("/Truck_Tracker_Ap/map");
    } else {
      alert("Entered OTP is wrong");
    }
  };

  // useEffect hook to focus on the OTP input field when the component mounts
  useEffect(() => {
    otpRef.current.focus();
  }, []);

  return (
    <div className="contanier">
      <h3>Welcome (phone number)</h3>
      <form onSubmit={verify_otp}>
        <input
          type="tel"
          name=""
          ref={otpRef}
          className="phnum otp"
          onChange={(e) => setOtp(e.target.value)}
          minLength={6}
          maxLength={6}
        />
        <button type="submit" className="next_btn verify">
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
