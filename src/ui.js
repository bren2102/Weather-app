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
  const temperatureSelector = document.getElementById('temperature-selector');
  const celsiusSelected = document.getElementById('celsius-selected');
  const farenheitSelected = document.getElementById('farenheit-selected');

  dataShow.style.display = 'none';
  cityInput.style.width = '50%';
  cityInput.style.margin = '0 auto';
  temperatureSelector.style.display = 'none';
  
  cityInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter'){
      Api.weatherResult(cityInput.value, 'metric').then((weather) => {
        renderWeather(weather);
      });
      celsiusSelected.style.color = 'gray';
      celsiusSelected.style.fontWeight = 'bold';
      farenheitSelected.addEventListener('mouseenter', (e) => {
        farenheitSelected.style.cursor = 'pointer';
      })
    };
  });

  farenheitSelected.addEventListener('click', () => {
    Api.weatherResult(cityName.textContent, 'imperial').then((weather) => {
      renderWeather(weather);
    });
    celsiusSelected.addEventListener('mouseenter', (e) => {
      celsiusSelected.style.cursor = 'pointer';
    })
    farenheitSelected.style.color = 'gray';
    farenheitSelected.style.fontWeight = 'bold';
    celsiusSelected.style.color = 'white';
    celsiusSelected.style.fontWeight = 'normal';
  });

  celsiusSelected.addEventListener('click', () => {
    Api.weatherResult(cityName.textContent, 'metric').then((weather) => {
      renderWeather(weather);
    });
    farenheitSelected.addEventListener('mouseenter', (e) => {
      farenheitSelected.style.cursor = 'pointer';
    })
    celsiusSelected.style.color = 'gray';
    celsiusSelected.style.fontWeight = 'bold';
    farenheitSelected.style.color = 'white';
    farenheitSelected.style.fontWeight = 'normal';
  });

  const renderWeather = (weather) => {
    dataShow.style.display = 'flex';
    temperatureSelector.style.display = 'flex';
    cityInput.style.width = 'auto';
    cityInput.style.margin = '0';
    cityInput.value = '';
    cityName.textContent = (weather.city).toUpperCase();
    countryName.textContent = Country.getCountryName(weather.country);
    temperatureNumber.textContent = weather.temperature + ' º';
    expectedDate.textContent = weather.expectedDate;
    windNumber.textContent = weather.wind + ' M / S';
    humidityNumber.textContent = weather.humidity + ' %';
  }
})();

export default uiManager;