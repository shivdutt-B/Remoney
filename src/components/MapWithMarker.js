import React, { useEffect, useRef } from 'react';

const MapWithMarker = ({ coordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const mapOptions = {
      center: coordinates.length > 0 ? coordinates[0] : { lat: 0, lng: 0 },
      zoom: 10
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    // Add markers
    coordinates.forEach((coordinate, index) => {
      new window.google.maps.Marker({
        position: coordinate,
        map: map,
        label: `${index + 1}` // Marker label
      });
    });

  }, [coordinates]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100vh' }} // Set the size of the map container
    />
  );
}

export default MapWithMarker;
