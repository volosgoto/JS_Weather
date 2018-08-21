class Ui {
    constructor() {
        this.location = document.getElementById('w-location');
        this.country = document.getElementById('w-country');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');

        // this.details = document.getElementById('w-details');

        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }


    paint(weather) {
        // Wether location
        this.location.textContent = weather.name;
        this.country.textContent = weather.sys.country;

        // Weather description
        let wd = weather.weather[0].description;
        this.desc.textContent = (function() {
            return wd[0].toUpperCase() + wd.slice(1);
        })(wd);


        //Temperature to Celsius
        this.string.textContent = 'Temperature: ' + (weather.main.temp - 273).toFixed(1);

        // Pressure
        let mmhg = 0.750062;
        let pressureConvert = mmhg;
        this.pressure.textContent = 'Pressure: ' + (weather.main.pressure * mmhg).toFixed(1) + ' ' + 'mmhg';

        // Add weather-icon
        let imgUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        this.icon.setAttribute('src', imgUrl);

        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.wind.textContent = 'Wind speed: ' + weather.wind.speed + ' m/sec';

    }
}