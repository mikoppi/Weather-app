/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/presentData.js":
/*!****************************!*\
  !*** ./src/presentData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _requestInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestInfo */ "./src/requestInfo.js");


const display=(() => {

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

/***/ }),

/***/ "./src/requestInfo.js":
/*!****************************!*\
  !*** ./src/requestInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherModule": () => (/* binding */ weatherModule)
/* harmony export */ });
const weatherModule =(() => {
    
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requestInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestInfo */ "./src/requestInfo.js");
/* harmony import */ var _presentData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentData */ "./src/presentData.js");
//import { handleSubmit } from "./requestInfo";



const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const nameData = new FormData(event.target);
    const value = nameData.get('search');
    let dataToDisplay= await _requestInfo__WEBPACK_IMPORTED_MODULE_0__.weatherModule.makeRequest(value)
    _presentData__WEBPACK_IMPORTED_MODULE_1__.display.presentData(dataToDisplay)

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRXZDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsVUFBVTtBQUN0QyxnREFBZ0Qsd0NBQXdDO0FBQ3hGLDZDQUE2QyxzQ0FBc0M7QUFDbkYsd0NBQXdDLGlDQUFpQztBQUN6RSwwQ0FBMEMsZUFBZTtBQUN6RCw0QkFBNEIsVUFBVTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxQk07QUFDUDtBQUNBO0FBQ0EsOEVBQThFLFNBQVM7QUFDdkY7QUFDQSw0REFBNEQsY0FBYztBQUMxRSw2REFBNkQsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7VUNoQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLGVBQWU7QUFDb0I7QUFDTjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtRUFBeUI7QUFDdEQsSUFBSSw2REFBbUI7O0FBRXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcHJlc2VudERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmVxdWVzdEluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWF0aGVyTW9kdWxlIH0gZnJvbSBcIi4vcmVxdWVzdEluZm9cIjtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXk9KCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHByZXNlbnREYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlclBhbmVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXBhbmVsJyk7XG4gICAgICAgIHdlYXRoZXJQYW5lbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgY29uc3QgbmFtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcbiAgICAgICAgY29uc3Qgd2luZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZCcpO1xuICAgICAgICBjb25zdCBodW1pZGl0eT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbiAgICAgICAgY29uc3QgbWFpbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQ9YCR7ZGF0YS5uYW1lfWA7XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50PWBUZW1wZXJhdHVyZTogJHtNYXRoLnJvdW5kKGRhdGEudGVtcGVyYXR1cmUgKiAxMCkgLyAxMH0gwrBDYDtcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50PWBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5mZWVsc0xpa2UgKiAxMCkgLyAxMH0gwrBDYDtcbiAgICAgICAgd2luZC50ZXh0Q29udGVudD1gV2luZCBzcGVlZDogJHtNYXRoLnJvdW5kKGRhdGEud2luZCAqIDEwKSAvIDEwfSBtL3NgO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudD1gSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX0gJWA7XG4gICAgICAgIG1haW4udGV4dENvbnRlbnQ9YCR7ZGF0YS5tYWlufWBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVzZW50RGF0YVxuICAgIH1cblxufSkoKTsiLCJleHBvcnQgY29uc3Qgd2VhdGhlck1vZHVsZSA9KCgpID0+IHtcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBtYWtlUmVxdWVzdChjaXR5TmFtZSkge1xuICAgICAgICBjb25zdCB1cmxXZWF0aGVyPWBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JnVuaXRzPW1ldHJpYyZhcHBpZD00YjgwZTAzZmJjMmMzMjliZTkyOTczYmYyYWUxNTFmNGA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVdlYXRoZXI9YXdhaXQgZmV0Y2godXJsV2VhdGhlciwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2VXZWF0aGVyLm9rKSB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5TmFtZX0gbm90IGZvdW5kYCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWREYXRhPXByb2Nlc3NXZWF0aGVyRGF0YShhd2FpdCByZXNwb25zZVdlYXRoZXIuanNvbigpKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWREYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycikge1xuICAgICAgICAgICAgYWxlcnQoZXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRhdGFOZWVkZWQ9e1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgICAgICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgICAgICBtYWluOiBkYXRhLndlYXRoZXJbMF0ubWFpblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFOZWVkZWQpXG4gICAgICAgIHJldHVybiBkYXRhTmVlZGVkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VSZXF1ZXN0XG4gICAgfVxuXG59KSgpO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgeyBoYW5kbGVTdWJtaXQgfSBmcm9tIFwiLi9yZXF1ZXN0SW5mb1wiO1xuaW1wb3J0IHsgd2VhdGhlck1vZHVsZSB9IGZyb20gXCIuL3JlcXVlc3RJbmZvXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vcHJlc2VudERhdGFcIjtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IHZhbHVlID0gbmFtZURhdGEuZ2V0KCdzZWFyY2gnKTtcbiAgICBsZXQgZGF0YVRvRGlzcGxheT0gYXdhaXQgd2VhdGhlck1vZHVsZS5tYWtlUmVxdWVzdCh2YWx1ZSlcbiAgICBkaXNwbGF5LnByZXNlbnREYXRhKGRhdGFUb0Rpc3BsYXkpXG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==