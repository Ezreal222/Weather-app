const apiKey = "58ad86cf43b51b4d52f85ca5feb7fd14";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temperature").innerText = Math.round(data.main.temp - 273) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/cloudy.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/heavy-rain.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/sun.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snowy.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


} 



searchBtn.addEventListener("click", () => {
    getWeather(searchBar.value);
});
