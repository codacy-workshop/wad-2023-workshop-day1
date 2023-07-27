function determineWeatherCondition(weatherData) {
  if (weatherData.temperature > 30) {
    if (weatherData.humidity > 80) {
      if (weatherData.windSpeed < 10) {
        return "Hot and humid with light breeze.";
      } else {
        return "Hot and humid with strong wind.";
      }
    } else {
      if (weatherData.windSpeed < 10) {
        return "Hot and dry with light breeze.";
      } else {
        return "Hot and dry with strong wind.";
      }
    }
  } else {
    if (weatherData.humidity > 80) {
      if (weatherData.windSpeed < 10) {
        return "Cool and humid with light breeze.";
      } else {
        return "Cool and humid with strong wind.";
      }
    } else {
      if (weatherData.windSpeed < 10) {
        return "Cool and dry with light breeze.";
      } else {
        return "Cool and dry with strong wind.";
      }
    }
  }
}

// Example
const weatherData = {
  temperature: 32,
  humidity: 85,
  windSpeed: 15,
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
