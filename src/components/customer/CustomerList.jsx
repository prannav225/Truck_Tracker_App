import React from "react";
import "../styles/CustomerList.css";

const CustomerList = ({ customers }) => {

  const handleDirectionsClick = (customer) => {
    const origin = "current location"; // Replace with the driver's current location
    const destination = `${customer.location.lat},${customer.location.lng}`;
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  
    window.open(url, "_blank");
  };
  

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
