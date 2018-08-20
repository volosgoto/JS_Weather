// Init
let weather = new Weather('Kiev', 'ua');
let ui = new Ui();

// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWether);


// Change location
// weather.changeLocation('London', 'uk');

// Get weather
function getWether() {
    weather.getWeather()
    .then(results => 
        // console.log(results),
        ui.paint(results)
    )
    .catch(err => console.log(err));
}
