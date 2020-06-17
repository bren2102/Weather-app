import Weather from './model/weather'

const aa = (() => {
  const apiRequest = 'http://api.openweathermap.org/data/2.5/weather?appid=a6173c3db3d0ef08cdae03efbc18c2c8';
  const weatherResult = (city) => {
    const citySearch = apiRequest + '&q=' + city + '&units=celcius';
    return new Promise((resolve, reject) => {
      fetch(citySearch).then(response => response.json().then((json) => {
        const weather = new Weather(json.name, json.sys.country, json.weather[0].description, json.wind.speed, json.main.humidity, json.main.temp);
        resolve(weather);
      }));
    });
  };
  return { weatherResult };
})();

export default aa;