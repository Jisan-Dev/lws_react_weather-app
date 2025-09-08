import { useState } from "react";
import { LocationContext } from "../contexts";

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    lat: "",
    lon: "",
  });
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
