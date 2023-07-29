function determineWeatherCondition(weatherData) {
    if (weatherData.temperature > 30) {
        return determineHumidity('Hot');
    }
    return determineHumidity('Cold');
}

function determineWindSpeed(temp, humid) {
    if (weatherData.windSpeed < 10) {
        return temp + " and " + humid + " with light breeze.";
    }
    return temp + " and " + humid +  " with strong wind.";

}

function determineHumidity(temp)  {
    if (weatherData.humidity > 80) {
        return determineWindSpeed (temp, "humid");
    }
    return determineWindSpeed (temp, "dry");

}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
