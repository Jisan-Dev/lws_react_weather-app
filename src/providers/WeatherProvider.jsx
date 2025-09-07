import { WeatherContext } from "../contexts";

export default function WeatherProvider({ children }) {
  return <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>;
}
