import Weather from './model/weather';

const apiWeather = (() => {
  const apiRequest = 'http://api.openweathermap.org/data/2.5/weather?appid=a6173c3db3d0ef08cdae03efbc18c2c8';
  const weatherResult = (city, unit) => {
    const citySearch = `${apiRequest}&q=${city}&units=${unit}`;
    return new Promise((resolve, reject) => {
      fetch(citySearch).then(response => response.json().then((json) => {
        if (json.name) {
          const weather = new Weather(json.name, json.sys.country,
            json.weather[0].main, json.wind.speed, json.main.humidity, json.main.temp);
          resolve(weather);
        } else {
          reject();
        }
      }));
    });
  };
  return { weatherResult };
})();

export default apiWeather;