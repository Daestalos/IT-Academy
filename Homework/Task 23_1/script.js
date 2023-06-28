const APP_ID = 'f16bf91af5ddc1b0be31dae917873af3';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';


// ### Call 5 day / 3 hour forecast data
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


const getResource = async(url) => {
    try{
        const res = await fetch(url)
        .then(res => res.json())
        return res
    }catch(err){
        throw new Error(`Error code ${err}`)
    }
}

const getWeatherInfo = async(place = 'Minsk') => {
    const result = await getResource(`${WEATHER_URL}?q=${place}&appid=${APP_ID}`);
    return result;
}

const getForecastInfo = async(lat, lon) => {
    const result = await getResource(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}`)
    return result;
}


// getWeatherInfo('Brest');

const currentWeatherPicture = (temp) => {
    const picture = document.querySelector('#weather-current');

    if(temp > 20){
        picture.src = 'images/tropical.jpg';
    } else if (temp >= 5 && temp < 20){
        picture.src = 'images/fall.jpg';
    } else {
        picture.src = 'images/winter.jpg';
    }
}


const renderWeatherApp = async () => {
    const currentPlace = document.querySelector('#place').value.trim();
    const data = await getWeatherInfo(currentPlace);
    const forecastData = await getWeatherInfo(currentPlace).then(data => getForecastInfo(data.coord.lat, data.coord.lon))
    console.log(forecastData);
    const currentTemp = document.querySelector('#current-temp');
    const currentWind = document.querySelector('#current-wind');

    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    currentWind.innerHTML = Math.round(data.wind.speed);

    currentWeatherPicture(Math.round(data.main.temp - 273));

    const forecastLi = document.querySelector('.collection,with-header')
    forecastLi.innerText = ''
    forecastLi.innerHTML += '<li class="collection-header"><h4>5 Day / 3 Hour Forecast</h4></li>'
    forecastData.list.map(data => {
        const forecastDate = new Date(data.dt_txt);
        let hour = forecastDate.getHours();
        const checkAMPM = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12;
        forecastLi.innerHTML += `
        <li class="collection-item"><div>${data.dt_txt.split(' ')[0]} ${hour ? hour : 12}:00 ${checkAMPM}
            <a href="#!" class="secondary-content"><i class="material-icons">${Math.round(data.main.temp - 273)} degrees</i></a></div>
        </li>
        `
    })
}

const searchBtn = document.querySelector('#get-info').addEventListener('click', renderWeatherApp);

