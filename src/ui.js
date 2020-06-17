import Weather from './model/weather' 

const uiManager = (() => {
  const content = document.getElementById('content');
  const cityName = document.getElementById('city-name');
  const countryName = document.getElementById('country-name');
  const temperatureNumber = document.getElementById('temperature-number');
  const expectedDate = document.getElementById('expected-day')
  const windNumber = document.getElementById('wind-number');
  const humidityNumber = document.getElementById('humidity-number');
  const cityInput = document.getElementById('city-input');

  dataInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter'){
      const newWeather = new Weather(cityInput.value);
    };
  })

  const renderWeather = (weather) => {
    cityName.textContent = weather.city;
    countryName.textContent = weather.country;
    temperatureNumber.textContent = weather.temperature;
    expectedDate.textContent = weather.expectedDate;
    windNumber.textContent = weather.wind;
    humidityNumber.textContent = weather.humidity;
  }
})();

export default uiManager;