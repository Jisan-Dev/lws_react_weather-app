import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoritesContext, WeatherContext } from "../../contexts";

export default function AddToFavorite() {
  const { weatherData } = useContext(WeatherContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const [isFavorite, toggleFavorite] = useState(false);

  useEffect(() => {
    toggleFavorite(favorites.some((fav) => fav.location === weatherData?.location));
  }, [favorites, weatherData?.location]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(weatherData?.location);
    } else {
      addToFavorites(weatherData?.longitude, weatherData?.latitude, weatherData?.location);
    }
    toggleFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
          onClick={handleFavorite}>
          <span>Add to Favorites</span>
          <img
            src={isFavorite ? RedHeartIcon : HeartIcon}
            // src={HeartIcon}
            alt="heart"
          />
        </button>
      </div>
    </div>
  );
}
