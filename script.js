
var cityEl = $("#city");
var searchFormEl = $("#search-form");
var prevSearchEl = $("#prev-searches");
var prevSearchBtn = $(".list-group-item");
var searchTermEl = $("#search-term");
var weatherResultsEl = $("#weather-results");

var currCity = "";
var currLon = "";
var currLat = "";

var prevSearchArray = [];

function searchCity(city){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=cedc089a08a587bd25470a7d4e49c2ee")
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(data){
            console.log(data);
        });
};

function printResults(){
    console.log("here");
};

function handleSubmit(event){
    event.preventDefault();
    currCity = cityEl.val();
    console.log(currCity);

    if (currCity) {
        searchCity(currCity);
    
        weatherResultsEl.textContent = '';
        cityEl.value = '';
    } else {
    alert('Please enter a City');
    }
}

if (localStorage.getItem("prevSearchArray")){
    prevSearchArray = JSON.parse(localStorage.getItem("prevSearchArray"));
}

for (var i = 0; i < prevSearchArray.length; i++){
    var newBtn = $(document.createElement("button"));

    newBtn.addClass("list-group-item list-group-item-action p-3");
    newBtn.text("NEW BTN");

    newBtn.appendTo(prevSearchEl);
}

// prevSearchBtn.on("click", printResults);
searchFormEl.on("submit", handleSubmit);

/*
API KEY: cedc089a08a587bd25470a7d4e49c2ee

SEARCH BY LAT LON
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=cedc089a08a587bd25470a7d4e49c2ee

SEARCH BY CITY
api.openweathermap.org/data/2.5/forecast?q={city name}&appid=cedc089a08a587bd25470a7d4e49c2ee

GEOCODING
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

searchCity function
printResults function

*/

/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/