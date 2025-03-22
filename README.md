# Weather Forecast App

## Overview
This Weather Forecast App allows users to check the weather for a specific city or their current location. It integrates with a weather API to provide real-time weather updates and features a user-friendly interface.

## Features
- Search for weather forecasts by city name.
- Fetch weather forecasts based on the user's current location.
- Interactive buttons and input fields for searching and updating weather data.
- Dropdown menu for recently searched cities stored in local/session storage.
- Event listeners to manage user interactions and update the UI.
- Input validation to prevent errors (e.g., invalid location, empty search queries).
- Display weather parameters like temperature, humidity, and wind speed.
- Use weather icons to represent conditions (e.g., sunny, cloudy, rainy).
- Displays a 5-day weather forecast in a structured format.
- Proper error handling for API failures and user input errors.

### Prerequisites
- A modern web browser
- A code editor (e.g., VS Code)
- Node.js (if using a local development server)
- Git (for version control)

## Usage
- Enter a city name in the search bar and click "Search" to get the weather forecast.
- Click on "Use Current Location" to fetch weather data based on your location.
- Recent searches appear in a dropdown; click on a city to reload weather data.
- View detailed forecasts, including temperature, wind speed, and humidity.

## API Configuration
- Sign up at [OpenWeatherMap](https://openweathermap.org/) or any other weather API provider.
- Get your API key and replace `YOUR_API_KEY` in the JavaScript file:
  ```js
  const API_KEY = 'YOUR_API_KEY';
  ```

## Technologies Used
- **HTML**: Structure of the web application
- **Tailwind CSS**: Styling and responsive design
- **JavaScript**: Fetching and displaying weather data
- **Local/Session Storage**: Storing recent searches
- **Git**: Version control

## GitHub Repository
[Link to GitHub Repository](https://github.com/ayuuusssh/Students_Registration_System.git)

## Contributors
- Ayush Tiwari

---
### Notes
- Ensure your API key is correctly set up before running the project.
- Use a browser with geolocation permissions enabled for location-based search.
