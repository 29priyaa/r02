document.addEventListener('DOMContentLoaded', function () {
    fetchWeather();
    fetchForecast();
  });
  
  function fetchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=GUNTUR&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `
          <h2>Current Weather</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
        `;
      })
      .catch(error => console.log('Error fetching weather data:', error));
  }
  
  function fetchForecast() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=GUNTUR&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const forecastElement = document.getElementById('forecast');
        forecastElement.innerHTML = '<h2>5-Day Forecast</h2>';
        for (let i = 0; i < data.list.length; i += 8) {
          const forecast = data.list[i];
          const date = new Date(forecast.dt * 1000);
          forecastElement.innerHTML += `
            <div>
              <p>Date: ${date.toDateString()}</p>
              <p>Temperature: ${forecast.main.temp}°C</p>
              <p>Weather: ${forecast.weather[0].main}</p>
            </div>
          `;
        }
      })
      .catch(error => console.log('Error fetching forecast data:', error));
  }
  