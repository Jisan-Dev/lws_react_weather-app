import { createContext } from "react";

const WeatherContext = createContext(null);
const FavoritesContext = createContext("");

export { FavoritesContext, WeatherContext };
