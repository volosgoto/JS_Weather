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
        this.location.textContent = weather.main.name;



        //  weather = [{
        //     "id":804,
        //     "main":"clouds",
        //     "description":"overcast clouds","icon":"04n"
        // }];


        // this.desc.textContent = 'Weather description ' + weather;
        this.desc.textContent = 'Weather description ' + weather;

        // let weather = [{
        //     "id":804,
        //     "main":"clouds",
        //     "description":"overcast clouds","icon":"04n"
        // }];


        this.string.textContent = (weather.main.temp - 273).toFixed(1); // to Celsius
        // this.icon.setAttribute('src', 'weather[0].icon');
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.fellslike.textContent = 'Good';
        this.dewpoint.textContent = '40';
        this.wind.textContent = weather.wind.speed;


    }
}