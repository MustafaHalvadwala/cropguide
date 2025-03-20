import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setError(null);
    setLoading(true);
    setWeather(null);

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Weather App
        </h2>
        
        <div className="flex space-x-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-3">{error}</p>
        )}

        {weather && (
          <div className="mt-4 p-4 bg-blue-100 rounded-lg text-center shadow">
            <h3 className="text-lg font-bold">{weather.name}</h3>
            <p className="text-gray-700 text-lg">{weather.main.temp}°C</p>
            <p className="text-gray-600 capitalize">
              {weather.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
