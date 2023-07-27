function determineWeatherCondition(weatherData) {
    let temperatureCondition = weatherData.temperature > 30 ? "Hot" : "Cool";
    let humidityCondition = weatherData.humidity > 80 ? "humid" : "dry";
    let windSpeedCondition = weatherData.windSpeed < 10 ? "light breeze." : "strong wind.";

    return `${temperatureCondition} and ${humidityCondition} with ${windSpeedCondition}`;
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
