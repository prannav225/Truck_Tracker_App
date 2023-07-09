import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ customers, driverLocation }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD8VfHJy_8CQQN6xmTRwHpnp6vvuMbQ-Pk&libraries=places`;

    script.onload = () => {
      setMapLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!mapLoaded) {
    return <div>Loading map...</div>;
  }

  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = driverLocation;

  const handleMarkerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
      {customers.map((customer) => (
        <Marker
          key={customer.id}
          position={customer.location}
          title={customer.name}
          onClick={() => handleMarkerClick(customer)}
        />
      ))}
      {selectedCustomer && (
        <Marker
          position={selectedCustomer.location}
          title={selectedCustomer.name}
        />
      )}
      <Marker position={driverLocation} title="Driver" />
    </GoogleMap>
  );
};

export default Map;
