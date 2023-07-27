function weatherTemperatureIsHigh(weatherData) {
    if (weatherData.humidity > 80) {
        if (weatherData.windSpeed < 10)
            return "Hot and humid with light breeze.";
        return "Hot and humid with strong wind.";
    }
    if (weatherData.windSpeed < 10)
        return "Hot and dry with light breeze.";
    return "Hot and dry with strong wind.";

}
function weatherTemperatureIsLow(weatherData) {
    if (weatherData.humidity > 80) {
        if (weatherData.windSpeed < 10)
            return "Cool and humid with light breeze.";
        return "Cool and humid with strong wind.";
    }
    if (weatherData.windSpeed < 10)
        return "Cool and dry with light breeze.";
    return "Cool and dry with strong wind.";


}
function determineWeatherCondition(weatherData) {
    if (weatherData.temperature > 30)
        return weatherTemperatureIsHigh(weatherData)
    return weatherTemperatureIsLow(weatherData)
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
