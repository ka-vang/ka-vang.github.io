// --------------- WEATHER SECTION ---------------

var apiKey = "4c7fc4117645d2e8b2c6297156366d0b";
var units = "imperial";
var searchMethod = 'q';

function searchWeather(searchTerm){
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APIKEY=${apiKey}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init (resultFromServer){
    var weatherDescHeader = document.querySelector("#weatherDescHeader");
    var tempElement = document.querySelector("#temp");
    var humidityElement = document.querySelector("#humidity");
    var windSpeedElement = document.querySelector("#windSpeed");
    var cityHeader = document.querySelector("#cityHeader");
    var weatherIcon = document.querySelector("#documentIconImg");

    weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.weather[0].icon + '.png';

    var resultDescription = resultFromServer.weather[0].description;
        weatherDescHeader.innerHTML = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    cityHeader.innerHTML = " " + resultFromServer.name;
    tempElement.innerHTML = " " + "Temperature: " + Math.floor(resultFromServer.main.temp) + "&#176";
    humidityElement.innerHTML = " " + "Humidity: " + resultFromServer.main.humidity + "%";
    windSpeedElement.innerHTML = " " + "Wind Speed: " + Math.floor(resultFromServer.wind.speed) + " m/s";
}

document.querySelector("#searchBtn").addEventListener("click", () => {
    var searchTerm = document.querySelector("#searchInput").value;
    if (searchTerm)
        searchWeather(searchTerm);
})

// --------------- LOCALSTORAGE SECTION -----------

if(localStorage.getItem("citySearched")){                               // checks to see if there's anything in the array, cityArray
    var cityArray = JSON.parse(localStorage.getItem("citySearched"));   // if there is, store the citySearched in the array
    // generate buttons to put on screen
    // var textarea = document.querySelector("#cityList");
    // textarea.value = cityArray.join("\n");

} else{                                                                 // if there isn't, create an array called cityArray and store the citySearched in there
    var cityArray = [];
}

$("#searchBtn").click(function(){                                       // when the searchBtn is clicked,                                     
    var cityEntered = document.querySelector("#searchInput").value;     // when the automatically push the cityEntered (that was typed in the text)
    cityArray.push(cityEntered);                                        // into the cityArray. all new entries will "push" to the bottom of the array
    localStorage.setItem("citySearched", JSON.stringify(cityArray));    // this will stringify all the citySearched entries in the array

    searchWeather(cityEntered);                                         // run the searchWeather function when the searchBtn is clicked
});

// --------------- FORECAST SECTION ---------------

function searchForecast(searchWord) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchWord}&APIKEY=${apiKey}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        initForecast(result);
        initForecast2(result);
        initForecast3(result);
        initForecast4(result);
        initForecast5(result);
    })
} 
// FORECAST DAY 1
function initForecast(resultsFromServer){
    var forecastDateElement = document.querySelector("#forecastDate");
    var forecastIcon = document.querySelector("#forecastDocumentIconImg");
    var forecastTempElement = document.querySelector("#forecastTemp");
    var forecastHumidityElement = document.querySelector("#forecastHumidity");
    var day1 = moment().add(1, 'days').format('L');
    // var weatherIcon = document.querySelector("#forestDocumentIconImg");    
    // weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultsFromServer.weather[0].icon + '.png';

    forecastDateElement.innerHTML = day1;
    forecastTempElement.innerHTML = " " + "Temp: " + Math.floor(resultsFromServer.list[1].main.temp) + "&#176";
    forecastHumidityElement.innerHTML = " " + "Humidity: " + resultsFromServer.list[1].main.humidity + "%";
}
// FORECAST DAY 2
function initForecast2(resultsFromServer){
    var forecastDateElement2 = document.querySelector("#forecastDate2");
    var forecastIcon2 = document.querySelector("#forecastDocumentIconImg2");
    var forecastTempElement2 = document.querySelector("#forecastTemp2");
    var forecastHumidityElement2 = document.querySelector("#forecastHumidity2");
    var day2 = moment().add(2, 'days').format('L');

    forecastDateElement2.innerHTML = day2;
    // weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultsFromServer.weather[0].icon + '.png';
    forecastTempElement2.innerHTML = " " + "Temp: " + Math.floor(resultsFromServer.list[2].main.temp) + "&#176";
    forecastHumidityElement2.innerHTML = " " + "Humidity: " + resultsFromServer.list[2].main.humidity + "%";
}
// FORECAST DAY 3
function initForecast3(resultsFromServer){
    var forecastDateElement3 = document.querySelector("#forecastDate3");
    var forecastIcon3 = document.querySelector("#forecastDocumentIconImg3");
    var forecastTempElement3 = document.querySelector("#forecastTemp3");
    var forecastHumidityElement3 = document.querySelector("#forecastHumidity3");
    var day3 = moment().add(3, 'days').format('L');

    forecastDateElement3.innerHTML = day3;
    // weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultsFromServer.weather[0].icon + '.png';
    forecastTempElement3.innerHTML = " " + "Temp: " + Math.floor(resultsFromServer.list[3].main.temp) + "&#176";
    forecastHumidityElement3.innerHTML = " " + "Humidity: " + resultsFromServer.list[3].main.humidity + "%";
}
// FORECAST DAY 4
function initForecast4(resultsFromServer){
    var forecastDateElement4 = document.querySelector("#forecastDate4");
    var forecastIcon4 = document.querySelector("#forecastDocumentIconImg4");
    var forecastTempElement4 = document.querySelector("#forecastTemp4");
    var forecastHumidityElement4 = document.querySelector("#forecastHumidity4");
    var day4 = moment().add(4, 'days').format('L');

    forecastDateElement4.innerHTML = day4;
    // weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultsFromServer.weather[0].icon + '.png';
    forecastTempElement4.innerHTML = " " + "Temp: " + Math.floor(resultsFromServer.list[4].main.temp) + "&#176";
    forecastHumidityElement4.innerHTML = " " + "Humidity: " + resultsFromServer.list[4].main.humidity + "%";
}
// FORECAST DAY 5
function initForecast5(resultsFromServer){
    var forecastDateElement5 = document.querySelector("#forecastDate5");
    var forecastIcon5 = document.querySelector("#forecastDocumentIconImg5");
    var forecastTempElement5 = document.querySelector("#forecastTemp5");
    var forecastHumidityElement5 = document.querySelector("#forecastHumidity5");
    var day5 = moment().add(5, 'days').format('L');

    forecastDateElement5.innerHTML = day5;
    // weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultsFromServer.weather[0].icon + '.png';
    forecastTempElement5.innerHTML = " " + "Temp: " + Math.floor(resultsFromServer.list[5].main.temp) + "&#176";
    forecastHumidityElement5.innerHTML = " " + "Humidity: " + resultsFromServer.list[5].main.humidity + "%";

    // forecastVisibility(); 
}
// WHEN YOU HIT THE SEARCH BUTTON, THE FORECAST WILL DISPLAY
document.querySelector("#searchBtn").addEventListener("click", () => {
    var searchWord = document.querySelector("#searchInput").value;
    if (searchWord)
        searchForecast(searchWord);
})
// FORECAST CARDS ARE INVISIBLE. THIS WILL MAKE THEM VISIBLE.
// function forecastVisibility(){
//     var forecastContainer = document.querySelector("#forestContainer");
//     var forecastContainerHeight = forecastContainer.clientHeight;
//     var forecastContainerWidth = forecastContainer.clientWidth;

//     forecastContainer.style.left = `calc(50% - ${forecastContainerWidth/2})`;
//     forecastContainer.style.top = `calc(50% - ${forecastContainerHeight/1.3})`;
//     forecastContainer.style.visibility = "visible";
// }
// --------------- MOMENT() SECTION ---------------

var forecastDate = document.querySelector("#date");
function currentForecastDate (){
    var now = moment().format("dddd, MMMM Do, YYYY");
    date.textContent = now;
}
currentForecastDate();