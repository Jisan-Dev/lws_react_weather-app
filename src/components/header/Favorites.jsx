import { useContext, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import { FavoritesContext, LocationContext } from "../../contexts";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const [showModal, setShowModal] = useState(false);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <>
      <div
        onClick={() => setShowModal(!showModal)}
        className="p-2 text-white hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={HeartIcon} alt="Heart Icon" />
        <span>Favorite Locations</span>
      </div>

      {/* <!-- Modal --> */}

      <div
        className={`${
          showModal ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-300 max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg`}>
        <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <li
                onClick={() => setSelectedLocation(fav)}
                key={fav.location}
                className="hover:bg-gray-200">
                {fav.location}
              </li>
            ))
          ) : (
            <li className="text-sm text-center text-gray-500">No favorite locations added.</li>
          )}
        </ul>
      </div>
    </>
  );
}
