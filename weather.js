class Weather {
    constructor(city, state) {
        // this.apiKey = '9a1df0044cfa9748';
        this.apiKey = 'eaa5a4f3e94da160e4967fc1c46a8a06';
        this.city = city;
        this.state = state;
    }


    // Fetch wether from API
    async getWeather() {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);


        let responseData = await response.json();

        // console.log(responseData);
        return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}