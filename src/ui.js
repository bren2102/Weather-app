import Api from './api';
import Country from './country';

const uiManager = (() => {
  const dataShow = document.getElementById('data-show');
  const cityName = document.getElementById('city-name');
  const countryName = document.getElementById('country-name');
  const temperatureNumber = document.getElementById('temperature-number');
  const expectedDate = document.getElementById('expected-day');
  const windNumber = document.getElementById('wind-number');
  const humidityNumber = document.getElementById('humidity-number');
  const cityInput = document.getElementById('city-input');
  const temperatureSelector = document.getElementById('temperature-selector');
  const celsiusSelected = document.getElementById('celsius-selected');
  const farenheitSelected = document.getElementById('farenheit-selected');
  const tempIcon = document.getElementById('temp-icon');
  let unitCeliusSelected = true;

  dataShow.style.display = 'none';
  cityInput.style.width = '50%';
  cityInput.style.margin = '0 auto';
  temperatureSelector.style.display = 'none';

  const celsiusSelect = () => {
    farenheitSelected.addEventListener('mouseenter', () => {
      farenheitSelected.style.cursor = 'pointer';
    });
    unitCeliusSelected = true;
    celsiusSelected.style.color = 'gray';
    celsiusSelected.style.fontWeight = 'bold';
    farenheitSelected.style.color = 'white';
    farenheitSelected.style.fontWeight = 'normal';
  };

  const farenheitSelect = () => {
    celsiusSelected.addEventListener('mouseenter', () => {
      celsiusSelected.style.cursor = 'pointer';
    });
    unitCeliusSelected = false;
    farenheitSelected.style.color = 'gray';
    farenheitSelected.style.fontWeight = 'bold';
    celsiusSelected.style.color = 'white';
    celsiusSelected.style.fontWeight = 'normal';
  };

  const renderWeather = (weather) => {
    dataShow.style.display = 'flex';
    temperatureSelector.style.display = 'flex';
    cityInput.style.width = 'auto';
    cityInput.style.margin = '0';
    cityInput.value = '';
    tempIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    cityName.textContent = (weather.city).toUpperCase();
    countryName.textContent = Country.getCountryName(weather.country);
    temperatureNumber.textContent = `${weather.temperature} º`;
    expectedDate.textContent = weather.expectedDate;
    windNumber.textContent = `${weather.wind} M / S`;
    humidityNumber.textContent = `${weather.humidity} %`;
  };

  cityInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      if (unitCeliusSelected === true) {
        Api.weatherResult(cityInput.value, 'metric').then((weather) => {
          renderWeather(weather);
          cityInput.placeholder = 'Search by city';
        }).catch(() => {
          cityInput.value = '';
          cityInput.placeholder = 'City not found';
        });
        celsiusSelect();
      } else {
        Api.weatherResult(cityInput.value, 'imperial').then((weather) => {
          renderWeather(weather);
          cityInput.placeholder = 'Search by city';
        }).catch(() => {
          cityInput.value = '';
          cityInput.placeholder = 'City not found';
        });
        farenheitSelect();
      }
    }
  });

  farenheitSelected.addEventListener('click', () => {
    Api.weatherResult(cityName.textContent, 'imperial').then((weather) => {
      renderWeather(weather);
    });
    farenheitSelect();
  });

  celsiusSelected.addEventListener('click', () => {
    Api.weatherResult(cityName.textContent, 'metric').then((weather) => {
      renderWeather(weather);
    });
    celsiusSelect();
  });
})();

export default uiManager;
