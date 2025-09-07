import Page from "./page";
import FavoritesProvider from "./providers/FavoritesProvider";
import WeatherProvider from "./providers/WeatherProvider";

function App() {
  return (
    <>
      <WeatherProvider>
        <FavoritesProvider>
          <Page />
        </FavoritesProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
