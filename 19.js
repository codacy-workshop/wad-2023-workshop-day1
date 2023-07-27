function higher30(weatherData) {
    if (weatherData.humidity > 80) {
        if (weatherData.windSpeed < 10) {
            return "Hot and humid with light breeze.";
        }
        return "Hot and humid with strong wind.";
    } 
    if (weatherData.windSpeed < 10) {
        return "Hot and dry with light breeze.";
    } 
    return "Hot and dry with strong wind.";
}

function notHigher30(weatherData) {
    if (weatherData.humidity > 80) {
        if (weatherData.windSpeed < 10) {
            return "Cool and humid with light breeze.";
        } 
        return "Cool and humid with strong wind.";
    } 
    if (weatherData.windSpeed < 10) {
        return "Cool and dry with light breeze.";
    }
    return "Cool and dry with strong wind.";
}

function determineWeatherCondition(weatherData) {
    if (weatherData.temperature > 30) {
        return higher30(weatherData);
    } 
    return notHigher30(weatherData);
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
