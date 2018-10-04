let weatherHolder = document.getElementById('weather');

function initialize() {
    var input = document.getElementById('searchTextField');
    var options = {
        types: ['(cities)']
    };

    var autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        sendRequest(place.geometry.location.lat(), place.geometry.location.lng());
    });

}
google.maps.event.addDomListener(window, 'load', initialize);



function sendRequest(lat, lng) {
    console.log('Hi!')
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=29d9a2bed1e5350709bc3341f20c66bf`, false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.statusText);
      } else {
        let weatherData = JSON.parse(xhr.responseText);
        let cityName = weatherData.name;
        let tempF = (1.8 * (+weatherData.main.temp - 273) + 32).toFixed(2) + 'F';
        let tempC = (+weatherData.main.temp - 273).toFixed(2) + 'C';
        let weather = weatherData.weather[0].main;
        console.log(weatherData);
        msg = `<p>City: ${cityName}</p><p>Weather: ${weather}</p><p>Temprature: ${tempF} / ${tempC}</p>`
        weatherHolder.innerHTML = msg;
      }
}