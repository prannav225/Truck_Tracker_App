import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import OTPVerification from "./components/Auth/OTPVerification";
import MapPage from "./components/Map/MapPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <h1>Truck Tracking App</h1>
      <Router>
        <Routes>
          <Route path="/Truck_Tracker_App" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Truck_Tracker_Ap/otp-verify" element={<OTPVerification setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated ? (
            <Route path="/Truck_Tracker_Ap/map" element={<MapPage />} />
          ) : (
            <Route path="*" element={<Navigate to="/Truck_Tracker_App" />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
