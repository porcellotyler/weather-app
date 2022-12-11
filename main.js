const info = document.getElementById('info');

async function getWeather() {
    try {
        let location = document.getElementById("input").value;
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3eb324c4545d6a9cb9285066c8748f42&units=imperial`, {mode: 'cors'});
        const weatherData = await response.json();

        formatWeatherData(weatherData);
        //info.innerText = weatherData.data.images.original.url; //reformat to match api and info i need
    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

async function formatWeatherData(weatherData) {
    const specificData = [weatherData.name, weatherData.main.temp, weatherData.main.temp_min, weatherData.main.temp_max, weatherData.weather[0].description];
    console.log(specificData);
}


/*function newImage() {
    img.src = '';

    let term = document.getElementById('search').value;
        console.log(term);

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=uoLOtF04ylcUTcPiWUrWI0UUMTOt4CPZ&s=${term}`, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    });
} */