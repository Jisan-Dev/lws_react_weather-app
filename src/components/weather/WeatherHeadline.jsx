import CloudIcon from "../../assets/icons/cloud.svg";
import HazeIcon from "../../assets/icons/haze.svg";
import RainIcon from "../../assets/icons/rainy.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import ThunderIcon from "../../assets/icons/thunder.svg";
import pin from "../../assets/pin.svg";
import useWeather from "../../hooks/useWeather";
import { getFormattedDate } from "../../utils/date-util";

export default function WeatherHeadline() {
  const { weatherData } = useWeather();

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Clouds":
        return CloudIcon;
      case "Snow":
        return SnowIcon;
      case "Clear":
        return SunnyIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Thunder":
        return ThunderIcon;
      case "Rain":
        return RainIcon;
      default:
        return SunnyIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(weatherData?.climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(weatherData?.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} alt="pin location icon" />
            <h2 className="text-2xl lg:text-[50px]">{weatherData?.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(weatherData?.time, "time", false)} -{" "}
        {getFormattedDate(weatherData?.time, "date", false)}
      </p>
    </div>
  );
}
