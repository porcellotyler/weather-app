const info = document.getElementById('info');

async function getWeather() {
    try {
        let location = document.getElementById("input").value;
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3eb324c4545d6a9cb9285066c8748f42&units=imperial`, {mode: 'cors'});
        const weatherData = await response.json();

        formatWeatherData(weatherData);
    } catch (error) {
        console.log(`Error: ${error}`)
        const infoDiv = document.getElementById('info');
        infoDiv.innerHTML = '';

        let errorDiv = document.createElement('div');
        errorDiv.setAttribute('class', 'errorDiv');
        errorDiv.innerText = 'Error! City not found, please try again. Consider including the country for improved accuracy.'

        infoDiv.append(errorDiv);
    }
};

function formatWeatherData(weatherData) {
    const specificData = [weatherData.name, weatherData.main.temp, weatherData.main.temp_min, weatherData.main.temp_max, weatherData.weather[0].description];
    console.log(specificData);

    updateDOM(specificData)
}

function updateDOM(array) {
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = '';

    let nameDiv = document.createElement('div');
    nameDiv.innerText = `City: ${array[0]}`;

    let tempDiv = document.createElement('div');
    tempDiv.innerText = `Temperature: ${array[1]}°F`;

    let tempMinDiv = document.createElement('div');
    tempMinDiv.innerText = `Low: ${array[2]}°F`;

    let tempMaxDiv = document.createElement('div');
    tempMaxDiv.innerText = `High: ${array[3]}°F`;

    let descriptionDiv = document.createElement('div');
    descriptionDiv.innerText = `Weather Description: ${array[4]}`;

    infoDiv.append(nameDiv, tempDiv, tempMinDiv, tempMaxDiv, descriptionDiv);
}
