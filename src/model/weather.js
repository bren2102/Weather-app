class Weather {
  constructor(city, country, expectedDate, wind, humidity, temperature) {
    this.city = city;
    this.country = country;
    this.expectedDate = expectedDate;
    this.wind = wind;
    this.humidity = humidity;
    this.temperature = temperature;
  }
}

export default Weather;