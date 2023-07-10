import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [phNumber, setPhNumber] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    navigate("/Truck_Tracker_Ap/otp-verify");
  };

  const resetInput = () => {
    setPhNumber("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="contanier">
      <form onSubmit={next}>
        <h3>Enter your Phone Number</h3>
        <input
          className="phnum"
          type="tel"
          name=""
          ref={inputRef}
          value={phNumber}
          onChange={(e) => setPhNumber(e.target.value)}
          minLength={10}
          maxLength={10}
          required
          />
        <div className="login_btns">
          <button className="next_btn">Next</button>
          <button className="cancel_btn" type="button" onClick={resetInput}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
