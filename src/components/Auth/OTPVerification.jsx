import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/OtpVerification.css'
const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verify_otp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      navigate("/map");
    } else {
      alert("Entered OTP is wrong");
    }
  };

  return (
    <div className="contanier">
      <h3>Welcome (phone number)</h3>
      <form onSubmit={verify_otp}>
        <input
          type="tel"
          name=""
          className="phnum otp"
          onChange={(e) => setOtp(e.target.value)}
          minLength={6}
          maxLength={6}
        />
        <button type="submit" className="next_btn verify">Verify</button>
      </form>
    </div>
  );
};

export default OTPVerification;
