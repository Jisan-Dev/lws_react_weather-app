import { FavoritesContext } from "../contexts";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (longitude, latitude, location) => {
    setFavorites([...favorites, { longitude, latitude, location }]);
  };

  const removeFromFavorites = (location) => {
    const updatedFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(updatedFavorites);
  };

  const contextValue = {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>;
}
