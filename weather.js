let weatherHolder = document.getElementById('weather');

function initialize() {
    let input = document.getElementById('searchTextField');
    input.value = '';
    let options = {
        types: ['(cities)']
    };

    let autocomplete = new google.maps.places.Autocomplete(input);

    if (localStorage.length !== 0) {
        let cachedCoordinates = localStorage.getItem('lastSearch').split(',');
        drawResponse(sendRequest(cachedCoordinates[0], cachedCoordinates[1]));
    }

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let place = autocomplete.getPlace();
        let coordinates = [place.geometry.location.lat(), place.geometry.location.lng()]
        cache('lastSearch', coordinates);
        drawResponse(sendRequest(coordinates[0], coordinates[1]));
    });

}
google.maps.event.addDomListener(window, 'load', initialize);

function cache(key, value) {
    localStorage.setItem(key, value);
}

function sendRequest(lat, lng) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=29d9a2bed1e5350709bc3341f20c66bf`, false);
    xhr.send();
    if (xhr.status != 200) {
        return xhr.statusText;
      } else {
        let weatherData = JSON.parse(xhr.responseText);
        return weatherData;
      }
}

function drawResponse(data) {
    if (typeof data === 'string' || data instanceof String) {
        weatherHolder.innerHTML = data;
    }
    else {
        let cityName = data.name;
        let tempF = (1.8 * (+data.main.temp - 273) + 32).toFixed(2);
        let tempC = (+data.main.temp - 273).toFixed(2);
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        let weather = data.weather[0].description;
        let iconID = data.weather[0].icon;
        let msg = `<div>
                        <p id="city"><strong>${cityName}</strong></p>
                        <p id="description"><img src="http://openweathermap.org/img/w/${iconID}.png" /> <span>${weather}</span></p>
                    </div>
                    <div>
                        <p><span class="temp">${tempF}</span> °F <strong>|</strong> <span class="temp">${tempC}</span> °C</p>
                        <p><span>Wind: ${wind} km/h<span> <strong>|</strong> <span>Humidity: ${humidity}%<span></p>
                    </div>`
        weatherHolder.innerHTML = msg;
    }
}