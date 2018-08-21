// Init
let weather = new Weather('Kiev', 'ua');
let ui = new Ui();


// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


document.querySelector('#w-change-btn').addEventListener('click', e => {
	const city = document.querySelector('#city').value;
	const state = document.querySelector('#state').value;

    // Set new location
    weather.changeLocation(city, state)
	

	// Get and display weather
	getWeather();

	// Close modal
	$('#locModal').modal('hide');
});

// Get weather
function getWeather() {
    weather.getWeather()
    .then(results => 
        // console.log(results),
        ui.paint(results)
    )
    .catch(err => console.log(err));
}
