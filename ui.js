class Ui {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');

        // this.stringMax = document.getElementById('w-stringMax');
        // this.stringMin = document.getElementById('w-stringMin');

        this.icon = document.getElementById('w-icon');

        // this.details = document.getElementById('w-details');

        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }


    paint(weather) {
        //     // Wether location city
        this.location.textContent = weather.name;

        // Weather deskription
        let wd = weather.weather[0].description;
        this.desc.textContent = (function() {
            return wd[0].toUpperCase() + wd.slice(1);
        })(wd);

        //to Celsius
        this.string.textContent = 'Temperature: ' + (weather.main.temp - 273).toFixed(1);
        // this.stringMax.textContent = 'Max: ' + (weather.main.temp_max - 273).toFixed(1);
        // this.stringMin.textContent = 'Min: ' + (weather.main.temp_min - 273).toFixed(1);

        // Pressure
        let mmhg = 0.750062;
        let pressureConvert = mmhg;
        this.pressure.textContent = 'Pressure: ' + (weather.main.pressure * mmhg).toFixed(1) + ' mmhg';

        // Add weather-icon
        let imgUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        this.icon.setAttribute('src', imgUrl);

        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.wind.textContent = 'Wind speed: ' + weather.wind.speed + ' m/sec';

    }
}