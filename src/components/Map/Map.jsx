import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const Map = ({ customers, driverLocation, setDriverLocation }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const driverMarkerRef = useRef(null);

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setDriverLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  }, [setDriverLocation]);

  useEffect(() => {
    if (map && driverLocation) {
      if (driverMarkerRef.current) {
        driverMarkerRef.current.setMap(null);
      }
      const newDriverMarker = new window.google.maps.Marker({
        position: driverLocation,
        map,
        title: "Driver",
      });
      driverMarkerRef.current = newDriverMarker;
    }
  }, [map, driverLocation]);

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handleMarkerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleDirectionsClick = (customer) => {
    if (driverLocation && driverLocation.lat && driverLocation.lng && map) {
      const directionsService = new window.google.maps.DirectionsService();

      const origin = new window.google.maps.LatLng(
        driverLocation.lat,
        driverLocation.lng
      );
      const destination = new window.google.maps.LatLng(
        customer.location.lat,
        customer.location.lng
      );

      const request = {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        }
      });
    }
  };

  if (!mapLoaded) {
    return <div>Loading map...</div>;
  }

  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = driverLocation
    ? driverLocation
    : {
        lat: 12.970647679317654,
        lng: 77.58767783472416,
      };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={handleMapLoad}
    >
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
      {driverMarkerRef.current && driverMarkerRef.current.setMap(map)}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Map;
