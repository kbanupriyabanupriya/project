const apiKey = "f6f2a8f6bf370fc2652df46728172d6d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-img");

async function checkWeather (city) {
const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
let detail=document.querySelector('.details').innerHTML;
detail=" ";
console.log(detail);
/*let weather = document.getElementById("weather-detail").value;
weather=" ";*/
if (response.status == 404){
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
document.querySelector(".subs").style.display = "none";

}else{
  var data = await response.json();
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "c";
document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
if (data.weather[0].main == "Clouds"){
weatherIcon.src = "clouds.png";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "clear.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src = "rain.png";
}
else if(data.weather[0].main == "Drizzle"){ 
weatherIcon.src = "drizzle.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src = "mist.png";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".subs").style.display = "flex";
document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);

});