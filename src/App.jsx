import Page from "./page";
import FavoritesProvider from "./providers/FavoritesProvider";
import LocationProvider from "./providers/LocationProvider";
import WeatherProvider from "./providers/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoritesProvider>
            <Page />
          </FavoritesProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
