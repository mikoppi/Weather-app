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

        name.textContent=`${data.name}`;
        temperature.textContent=`Temperature: ${Math.round(data.temperature * 10) / 10} °C`;
        feelsLike.textContent=`Feels like: ${Math.round(data.feelsLike * 10) / 10} °C`;
        wind.textContent=`Wind speed: ${Math.round(data.wind * 10) / 10} m/s`;
        humidity.textContent=`Humidity: ${data.humidity} %`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRXZDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFVBQVU7QUFDdEMsZ0RBQWdELHdDQUF3QztBQUN4Riw2Q0FBNkMsc0NBQXNDO0FBQ25GLHdDQUF3QyxpQ0FBaUM7QUFDekUsMENBQTBDLGVBQWU7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pCTTtBQUNQO0FBQ0E7QUFDQSw4RUFBOEUsU0FBUztBQUN2Rix3REFBd0QsY0FBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7VUN4QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLGVBQWU7QUFDb0I7QUFDTjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtRUFBeUI7QUFDdEQsSUFBSSw2REFBbUI7O0FBRXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcHJlc2VudERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmVxdWVzdEluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWF0aGVyTW9kdWxlIH0gZnJvbSBcIi4vcmVxdWVzdEluZm9cIjtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXk9KCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHByZXNlbnREYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlclBhbmVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXBhbmVsJyk7XG4gICAgICAgIHdlYXRoZXJQYW5lbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgY29uc3QgbmFtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcbiAgICAgICAgY29uc3Qgd2luZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZCcpO1xuICAgICAgICBjb25zdCBodW1pZGl0eT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcblxuICAgICAgICBuYW1lLnRleHRDb250ZW50PWAke2RhdGEubmFtZX1gO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudD1gVGVtcGVyYXR1cmU6ICR7TWF0aC5yb3VuZChkYXRhLnRlbXBlcmF0dXJlICogMTApIC8gMTB9IMKwQ2A7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudD1gRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEuZmVlbHNMaWtlICogMTApIC8gMTB9IMKwQ2A7XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQ9YFdpbmQgc3BlZWQ6ICR7TWF0aC5yb3VuZChkYXRhLndpbmQgKiAxMCkgLyAxMH0gbS9zYDtcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQ9YEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9ICVgXG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVzZW50RGF0YVxuICAgIH1cblxufSkoKTsiLCJleHBvcnQgY29uc3Qgd2VhdGhlck1vZHVsZSA9KCgpID0+IHtcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBtYWtlUmVxdWVzdChjaXR5TmFtZSkge1xuICAgICAgICBjb25zdCB1cmxXZWF0aGVyPWBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JnVuaXRzPW1ldHJpYyZhcHBpZD00YjgwZTAzZmJjMmMzMjliZTkyOTczYmYyYWUxNTFmNGA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlV2VhdGhlcj1hd2FpdCBmZXRjaCh1cmxXZWF0aGVyLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWREYXRhPXByb2Nlc3NXZWF0aGVyRGF0YShhd2FpdCByZXNwb25zZVdlYXRoZXIuanNvbigpKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRhdGFOZWVkZWQ9e1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgICAgICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YU5lZWRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlUmVxdWVzdFxuICAgIH1cblxufSkoKTtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHsgaGFuZGxlU3VibWl0IH0gZnJvbSBcIi4vcmVxdWVzdEluZm9cIjtcbmltcG9ydCB7IHdlYXRoZXJNb2R1bGUgfSBmcm9tIFwiLi9yZXF1ZXN0SW5mb1wiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL3ByZXNlbnREYXRhXCI7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCB2YWx1ZSA9IG5hbWVEYXRhLmdldCgnc2VhcmNoJyk7XG4gICAgbGV0IGRhdGFUb0Rpc3BsYXk9IGF3YWl0IHdlYXRoZXJNb2R1bGUubWFrZVJlcXVlc3QodmFsdWUpXG4gICAgZGlzcGxheS5wcmVzZW50RGF0YShkYXRhVG9EaXNwbGF5KVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=