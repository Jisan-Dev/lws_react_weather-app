import { createContext } from "react";

const WeatherContext = createContext(null);
const FavoritesContext = createContext("");
const LocationContext = createContext(null);

export { FavoritesContext, LocationContext, WeatherContext };
