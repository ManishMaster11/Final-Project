const cityName =document.querySelector(".city-name")
const actCityNanme = document.querySelector("#act-city-name")
const actWeatherImg = document.querySelector(".act-weather-img")
const actCityWeather = document.querySelector("#act-city-weather")
const actWeatherName = document.querySelector("#act-weather-name")
const searchBtn = document.querySelector(".searchbtn")
// actWeatherImg.src = "rain.png"

searchBtn.addEventListener("click",()=>{

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=b75d133550eefccb35c6a8544144dd4f`

fetch(URL)
.then(response=>{
return response.json()
}).then(data=>{
// console.log(data.weather[0].main)
actCityNanme.value = data.name;
actCityWeather.value = (parseFloat(data.main.temp)-273.15).toFixed(2) 
actWeatherName.value = data.weather[0].main;

if(data.weather[0].main == "Clouds"){
    actWeatherImg.src = "cloudy.png"
}else if(data.weather[0].main == "Mostly Cloudy"){
    actWeatherImg.src = "mostly cloudy.png"
}
else if(data.weather[0].main == "Mostly Sunny"){
    actWeatherImg.src = "mostly sunny.png"
}
else if(data.weather[0].main == "Rain"){
    actWeatherImg.src = "rain.png"
}
else if(data.weather[0].main == "Some Cloudy"){
    actWeatherImg.src = "some cloudy.png"
}
else if(data.weather[0].main == "Sunny" || data.weather[0].main == "Clear" ){
    actWeatherImg.src = "sunny.png"
}
else{

    actWeatherImg.src = "cloudy.png"

}
})






})