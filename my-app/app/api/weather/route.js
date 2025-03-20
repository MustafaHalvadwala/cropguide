export async function GET(req) {
    const url = new URL(req.url, "http://localhost:3000"); // Ensure full URL
    const city = url.searchParams.get("city");
    const API_KEY = "c62671c85dc4dfde878eb9788660ca3f"; // Ensure API key is correctly loaded
  
    if (!city) {
      return Response.json({ error: "City parameter is required" }, { status: 400 });
    }
  
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(WEATHER_URL);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather data");
      }
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
  
  
  
  