const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};
function determineWeatherCondition(weatherData) {
    if (weatherData.temperature > 30) {
        checkHumidity();
    } else {
        checkHumidity();
    }
}

function checkHumidity() {
    if (weatherData.humidity > 80) {
        return "Hot and humid with light breeze.";
    } else {
        return "Hot and humid with strong wind.";
    }
}


const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
