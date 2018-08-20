class Ui{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.fellslike = document.getElementById('w-fells-like');
        this.wind = document.getElementById('w-wind');
    }


    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        //to Celsius
        this.string.textContent = 'Temperature: ' + (weather.main.temp - 273).toFixed(1);    
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.fellslike.textContent = 'Good';
        this.dewpoint.textContent = 'Dewp oint: ' + '40';
        this.wind.textContent = 'Wind speed: ' + weather.wind.speed + ' m/sec';


    }
}