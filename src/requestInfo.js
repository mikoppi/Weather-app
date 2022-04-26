export const weatherModule =(() => {
    
    async function makeRequest(cityName) {
        const urlWeather=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4b80e03fbc2c329be92973bf2ae151f4`;
        const responseWeather=await fetch(urlWeather, { mode: "cors" });
        const processedData=processWeatherData(await responseWeather.json());
        return processedData;
    }
    
    function processWeatherData(data) {
        const dataNeeded={
            name: data.name,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            wind: data.wind.speed,
            humidity: data.main.humidity
        }
        return dataNeeded;
    }

    return {
        makeRequest
    }

})();


