import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts";

const useWeather = () => {
  const { selectedLocation } = useContext(LocationContext);
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({ state: true, message: "Fetching weather data..." });

      // fetch weather data from API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch weather data: ${response?.status}: ${response?.statusText}`
        );
      }

      const data = await response.json();
      // console.log("response weather data:", data);

      // then update the weatherData state with values from API
      setWeatherData({
        ...weatherData,
        location: data?.name || "Unknown location",
        climate: data?.weather[0]?.main || "Unknown climate",
        temperature: data?.main?.temp || "",
        maxTemperature: data?.main?.temp_max || "",
        minTemperature: data?.main?.temp_min || "",
        humidity: data?.main?.humidity || "",
        cloudPercentage: data?.clouds?.all || "",
        wind: data?.wind?.speed || "",
        time: data?.dt || "",
        longitude: data?.coord?.lon || "",
        latitude: data?.coord?.lat || "",
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location...",
    });

    if (selectedLocation?.lat && selectedLocation?.lon) {
      fetchWeatherData(selectedLocation.lat, selectedLocation.lon);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation.lat, selectedLocation.lon]);

  return { weatherData, loading, error };
};

export default useWeather;
