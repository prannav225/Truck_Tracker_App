import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../Map/Map";
import CustomerForm from "../customer/CustomerForm";
import CustomerList from "../customer/CustomerList";
import '../styles/MapPage.css'

const MapPage = () => {
  const [customers, setCustomers] = useState([]);
  const [driverLocation, setDriverLocation] = useState({
    lat: 12.908412794485931,
    lng: 77.52064432369234,
  });
  const location = useLocation();

  // useEffect(() => {
  //   // Retrieve customers data from localStorage
  //   const storedCustomers = localStorage.getItem("customers");
  //   if (storedCustomers) {
  //     setCustomers(JSON.parse(storedCustomers));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Update localStorage when customers state changes
  //   localStorage.setItem("customers", JSON.stringify(customers));
  // }, [customers]);

  const handleAddCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  return (
    <div className="map-page">
      <div className="map-container">
        <Map customers={customers} driverLocation={driverLocation} />
        <div className="customer-section">
          {location.pathname === "/map" && (
            <>
              
              <CustomerForm onAddCustomer={handleAddCustomer} />
              <CustomerList customers={customers} driverLocation={driverLocation} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
