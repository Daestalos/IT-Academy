const APP_ID = 'f16bf91af5ddc1b0be31dae917873af3';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getResource = async(url) => {
    try{
        const res = await fetch(url);
        return res.json();
    }catch(err){
        throw new Error(`Error code ${err}`)
    }
}

const getWeatherInfo = async(place = 'Minsk') => {
    const result = await getResource(`${WEATHER_URL}?q=${place}
    &appid=${APP_ID}`);
    // console.log(result);
    return result;
}

getWeatherInfo('Brest');

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
    const currentTemp = document.querySelector('#current-temp');
    const currentWind = document.querySelector('#current-wind');

    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    currentWind.innerHTML = Math.round(data.wind.speed);

    currentWeatherPicture(Math.round(data.main.temp - 273));
}

const searchBtn = document.querySelector('#get-info')
.addEventListener('click', renderWeatherApp);