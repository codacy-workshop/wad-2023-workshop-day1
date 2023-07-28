function determineWeatherCondition(weatherData) {
    if (weatherData.temperature > 30) {
        checkHumidityAndWindSpeed();
    } else {
        checkHumidityAndWindSpeed();
    }
}

function checkHumidityAndWindSpeed()
{
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
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
