import React, { useState } from "react";
import '../styles/CustomerForm.css';


const CustomerForm = ({ onAddCustomer }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      id: Date.now(),
      name,
      phoneNumber,
      location: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
    };
    onAddCustomer(customer);
    setName("");
    setPhoneNumber("");
    setLatitude("");
    setLongitude("");
  };

  return (
    <div className="customer-form">
      <h2>Add Customer</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        maxLength={10}
        minLength={10}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <label htmlFor="latitude">Latitude:</label>
      <input
        type="text"
        id="latitude"
        value={latitude}
        onChange={handleLatitudeChange}
      />
      <label htmlFor="longitude">Longitude:</label>
      <input
        type="text"
        id="longitude"
        value={longitude}
        onChange={handleLongitudeChange}
      />
      <button type="submit">Add Customer</button>
    </form>
  </div>
);
};

export default CustomerForm;