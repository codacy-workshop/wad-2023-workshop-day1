function determineWeatherCondition(weatherData) {
    let res = "";
    res += (weatherData.temperature > 30) ? "Hot" : "Cool";
    res += " and ";
    res += (weatherData.humidity > 80) ? "humid" : "dry";
    res += " with ";
    res += (weatherData.windSpeed < 10) ? "light breeze" : "strong wind";
    res += ".";
   return res;
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
