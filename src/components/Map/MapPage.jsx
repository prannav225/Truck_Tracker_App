import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../Map/Map";
import CustomerForm from "../customer/CustomerForm";
import CustomerList from "../customer/CustomerList";
import "../styles/MapPage.css";

const MapPage = () => {
  const [driverLocation, setDriverLocation] = useState(() => {
    const storedDriverLocation = localStorage.getItem("driverLocation");
    return storedDriverLocation ? JSON.parse(storedDriverLocation) : null;
  });

  const [customers, setCustomers] = useState(() => {
    const storedCustomers = localStorage.getItem("customers");
    return storedCustomers ? JSON.parse(storedCustomers) : [];
  });

  useEffect(() => {
    localStorage.setItem("driverLocation", JSON.stringify(driverLocation));
  }, [driverLocation]);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const location = useLocation();

  const handleAddCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  return (
    <div className="map-page">
      <div className="map-container">
        <Map
          customers={customers}
          driverLocation={driverLocation}
          setDriverLocation={setDriverLocation}
        />
        <div className="customer-section">
          {location.pathname === "/Truck_Tracker_Ap/map" && (
            <>
              <CustomerForm onAddCustomer={handleAddCustomer} />
              <CustomerList
                customers={customers}
                driverLocation={driverLocation}
                setCustomers={setCustomers}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
