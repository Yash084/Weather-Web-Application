const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aaed44e486msh9388e45b4614e47p18e8c0jsn171caadc4500',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

var city="Delhi";
const getWeatherCity=(city)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)


        cityname.innerHTML=city
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.log("City do not exist"));
}

let form = document.getElementById('form')

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e);
    city=e.target[0].value;
    city=city.charAt(0).toUpperCase() + city.slice(1);
    getWeatherCity(city);
})


getWeatherCity(city);