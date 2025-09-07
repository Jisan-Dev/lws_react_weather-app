import { useContext } from "react";
import { FavoritesContext } from "../../contexts";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src="./assets/heart.svg" alt="" />
        <span>Favorite Locations</span>
      </div>

      {/* <!-- Modal --> */}
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favorites.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              {fav.location}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
