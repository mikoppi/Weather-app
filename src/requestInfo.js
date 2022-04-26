export const weatherModule =(() => {
    
    async function makeRequest(cityName) {
        const urlWeather=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4b80e03fbc2c329be92973bf2ae151f4`;
        try {
            const responseWeather=await fetch(urlWeather, { mode: "cors" });
            if (!responseWeather.ok) throw new Error(`City ${cityName} not found`);
            const processedData=processWeatherData(await responseWeather.json());
            return processedData;
        }
        catch(err) {
            alert(err)
        }
    }
    
    function processWeatherData(data) {
        const dataNeeded={
            name: data.name,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            main: data.weather[0].main
        }
        console.log(dataNeeded)
        return dataNeeded;
    }

    return {
        makeRequest
    }

})();


