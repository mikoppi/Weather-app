import { weatherModule } from "./requestInfo";

export const display=(() => {

    function presentData(data) {
        const weatherPanel=document.querySelector('.weather-panel');
        weatherPanel.classList.add('active');
        const name=document.querySelector('#city-name');
        const temperature=document.querySelector('#temperature');
        const feelsLike=document.querySelector('#feels-like');
        const wind=document.querySelector('#wind');
        const humidity=document.querySelector('#humidity');
        const main=document.querySelector('#main');

        name.textContent=`${data.name}`;
        temperature.textContent=`Temperature: ${Math.round(data.temperature * 10) / 10} °C`;
        feelsLike.textContent=`Feels like: ${Math.round(data.feelsLike * 10) / 10} °C`;
        wind.textContent=`Wind speed: ${Math.round(data.wind * 10) / 10} m/s`;
        humidity.textContent=`Humidity: ${data.humidity} %`;
        main.textContent=`${data.main}`
    }

    return {
        presentData
    }

})();