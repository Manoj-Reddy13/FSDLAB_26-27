const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");
const message = document.getElementById("message");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const forecastDiv = document.getElementById("forecast");
searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});
async function getWeather() {
    const city = cityInput.value.trim();
    if (city === "") {
        message.textContent = "Please enter a city name.";
        weatherDiv.classList.add("hidden");
        return;
    }
    message.textContent = "Loading weather data...";
    weatherDiv.classList.add("hidden");
    try {
        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
        const geoResponse = await fetch(geoURL);
        if (!geoResponse.ok) {
            throw new Error("Unable to find location.");
        }
        const geoData = await geoResponse.json();
        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found.");
        }
        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;
        const weatherURL =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
            `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
            `&timezone=auto` +
            `&forecast_days=10`;
        const weatherResponse = await fetch(weatherURL);
        if (!weatherResponse.ok) {
            throw new Error("Unable to fetch weather data.");
        }
        const weatherData = await weatherResponse.json();
        displayWeather(location, weatherData);
        message.textContent = "";
        weatherDiv.classList.remove("hidden");
    }
    catch (error) {
        console.error(error);
        message.textContent = error.message;
        weatherDiv.classList.add("hidden");
    }
}
function displayWeather(location, data) {
    locationElement.textContent =
        `${location.name}, ${location.country}`;
    temperatureElement.textContent =
        Math.round(data.current.temperature_2m);
    descriptionElement.textContent =
        getWeatherDescription(data.current.weather_code);
    humidityElement.textContent =
        data.current.relative_humidity_2m;
    windElement.textContent =
        data.current.wind_speed_10m;
    displayForecast(data.daily);
}
function displayForecast(daily) {
    forecastDiv.innerHTML = "";
    for (let i = 0; i < daily.time.length; i++) {
        const date =
            new Date(daily.time[i] + "T00:00:00");
        const dayName =
            date.toLocaleDateString("en-US", {
                weekday: "short"
            });
        const card =
            document.createElement("div");
        card.classList.add("forecast-card");
        card.innerHTML = `
            <h3>${dayName}</h3>
            <p>
                ${getWeatherDescription(daily.weather_code[i])}
            </p>
            <p class="temp">
                ${Math.round(daily.temperature_2m_max[i])}°C
            </p>
            <p>
                Min:
                ${Math.round(daily.temperature_2m_min[i])}°C
            </p>
        `;
        forecastDiv.appendChild(card);
    }
}
function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snowfall",
        73: "Moderate snowfall",
        75: "Heavy snowfall",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"
    };
    return weatherCodes[code] || "Unknown weather";
}
const map = L.map("map").setView(
    [20.5937, 78.9629],
    5
);
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }
).addTo(map);
let lastCity = "";
let lastRequestTime = 0;
map.on("mousemove", async function (event) {
    const now = Date.now();
    if (now - lastRequestTime < 1000) {
        return;
    }
    lastRequestTime = now;
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;
    try {
        const url =
            `https://api.bigdatacloud.net/data/reverse-geocode-client` +
            `?latitude=${lat}` +
            `&longitude=${lon}` +
            `&localityLanguage=en`;
        const response = await fetch(url);

        if (!response.ok) {
            return;
        }
        const data = await response.json();
        const city =
            data.city ||
            data.locality ||
            data.principalSubdivision;
        if (city && city !== lastCity) {
            cityInput.value = city;
            lastCity = city;
        }
    }
    catch (error) {
        console.log("Location lookup failed");
    }
});
