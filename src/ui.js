import Weather from './model/weather'
import Api from './api'
import Country from './country'

const uiManager = (() => {
  const dataShow = document.getElementById('data-show');
  const cityName = document.getElementById('city-name');
  const countryName = document.getElementById('country-name');
  const temperatureNumber = document.getElementById('temperature-number');
  const expectedDate = document.getElementById('expected-day')
  const windNumber = document.getElementById('wind-number');
  const humidityNumber = document.getElementById('humidity-number');
  const cityInput = document.getElementById('city-input');

  dataShow.style.display = 'none';
  cityInput.style.width = '50%'
  cityInput.style.margin = '0 auto'
  
  cityInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter'){
      Api.weatherResult(cityInput.value).then((weather) => {
        renderWeather(weather);
      });
      cityInput.textContent = ' ';
    };
  })

  const renderWeather = (weather) => {
    dataShow.style.display = 'flex';
    cityInput.style.width = '25%'
    cityName.textContent = (weather.city).toUpperCase();
    countryName.textContent = Country.getCountryName(weather.country);
    temperatureNumber.textContent = weather.temperature + ' º';
    expectedDate.textContent = weather.expectedDate;
    windNumber.textContent = weather.wind + ' M / S';
    humidityNumber.textContent = weather.humidity + ' %';
  }
})();

export default uiManager;