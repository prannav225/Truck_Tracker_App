import React, { useEffect } from "react";
import "../styles/CustomerList.css";

const CustomerList = ({ customers, driverLocation, setCustomers, map }) => {
  const handleDirectionsClick = (customer) => {
    if (driverLocation && driverLocation.lat && driverLocation.lng) {
      const origin = `${driverLocation.lat},${driverLocation.lng}`;
      const destination = `${customer.location.lat},${customer.location.lng}`;
      const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  
      // Open the Google Maps directions URL in a new window
      window.open(url, "_blank");
    }
  };
  

  useEffect(() => {
    const storedCustomers = localStorage.getItem("customers");
    if (storedCustomers) {
      const parsedCustomers = JSON.parse(storedCustomers);
      setCustomers(parsedCustomers);
    }
  }, [setCustomers]);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phoneNumber}</td>
              <td>
                <button
                  className="directions_btn"
                  onClick={() => handleDirectionsClick(customer)}
                >
                  Directions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;