const apiKey = '1f7434e587a195b1cdb48ecaa9b803ab'; 
const weatherData = document.getElementById('weatherData');
const forecastContainer = document.getElementById('forecastContainer');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const currentLocationBtn = document.getElementById('currentLocationBtn');
const cityNameElem = document.getElementById('cityName');
const temperatureElem = document.getElementById('temperature');
const windElem = document.getElementById('wind');
const humidityElem = document.getElementById('humidity');
const descriptionElem = document.getElementById('description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

currentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByLocation(latitude, longitude);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(`Fetching weather data for city: ${city} with URL: ${url}`);
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            fetchForecast(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please check the city name.');
        });
}

function fetchWeatherByLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            fetchForecast(lat, lon);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.');
        });
}

function fetchForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            alert('Error fetching forecast data.');
        });
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;
    cityNameElem.textContent = `${name} (${new Date().toLocaleDateString()})`;
    temperatureElem.textContent = `Temperature: ${main.temp}°C`;
    windElem.textContent = `Wind: ${wind.speed} M/S`;
    humidityElem.textContent = `Humidity: ${main.humidity}%`;
    descriptionElem.textContent = weather[0].description;

    weatherData.classList.remove('hidden');
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';
    const forecastList = data.list.filter((item, index) => index % 8 === 0);
    
    forecastList.forEach(forecast => {
        const { dt_txt, main, weather, wind } = forecast;
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
            <h4>${new Date(dt_txt).toLocaleDateString()}</h4>
            <p>Temp: ${main.temp}°C</p>
            <p>Wind: ${wind.speed} M/S</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>${weather[0].description}</p>
        `;
        forecastContainer.appendChild(forecastCard);
    });

    forecastContainer.classList.remove('hidden');
}
