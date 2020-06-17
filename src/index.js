import './assets/styles/styles.scss';
import UiManagement from 'ui';

const apiRequest = 'http://api.openweathermap.org/data/2.5/weather?appid=a6173c3db3d0ef08cdae03efbc18c2c8';

const weatherResult = (city) => {  
  const citySearch = apiRequest + '&q=lima';
  return new Promise((resolve, reject) => {
    fetch(citySearch).then(response.json().then((json) => {
      const weather = json.wind.speed;
      resolve(weather);
      console.log(weather);
    }));
  });
};