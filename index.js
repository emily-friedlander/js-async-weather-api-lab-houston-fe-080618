const API_KEY = "a13550776803df4c8e6f047d643b66c8"


function handleFormSubmit(event) {
  event.preventDefault();
  let city = document.querySelector('#city').value.replace(/ /g,'+');

  fetchCurrentWeather(city);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  

  
  fetch(url)
  .then(data => data.json())
  .then(convertedData => displayCurrentWeather(convertedData) + console.log(convertedData));
}

function displayCurrentWeather(inputtedData) {
  let temp = document.getElementById('temp');
  let low = document.getElementById('low');
  let high = document.getElementById('high');
  let humidity = document.getElementById('humidity');
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');

  temp.innerHTML = inputtedData.main.temp;
  low.innerHTML = inputtedData.main.temp_min;
  high.innerHTML = inputtedData.main.temp_max;
  humidity.innerHTML = inputtedData.main.humidity;
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById('cityForm').addEventListener('submit', handleFormSubmit)
  document.getElementById('city').focus()
})