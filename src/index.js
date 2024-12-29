function updateWeather(response) {
    
}



function searchCity(city) {
    let apiKey = "440e344af069a0c2t1a109fc3o0b45ba";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
    axios.get(apiUrl).then(updateWeather);
}



function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);