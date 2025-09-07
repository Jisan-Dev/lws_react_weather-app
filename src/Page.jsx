import Header from "./components/header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function Page() {
  return (
    <div>
      <div className="grid place-items-center h-screen bg-no-repeat bg-cover">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </div>
  );
}
