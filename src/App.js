import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import OTPVerification from "./components/Auth/OTPVerification";
import MapPage from "./components/Map/MapPage";

const App = () => {
  return (
    <div className="App">
      <h1>Truck Tracking App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp-verify" element={<OTPVerification />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
