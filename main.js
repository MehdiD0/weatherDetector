let cityName , countryName , weather ;
const input = document.querySelector(".input") ;
const button = document.querySelector(".button") ;
const title = document.querySelector("h1")

const cityNameDiv = document.querySelector(".city")
const countryNameDiv = document.querySelector(".country")
const weatherDiv = document.querySelector(".weath")

async function init() {
  const res = await fetch("http://api.weatherapi.com/v1/current.json?key=515a284a61cc4c01854130309231806&q="+input.value+"&aqi=no") ;
  const resObj = await res.json() ;
  if(resObj.error) {
    title.classList.add("wrong-city");

    setTimeout(() => {
      title.classList.remove("wrong-city");
    }, 500);

    input.value=""
    return ;
  }
  cityName = resObj.location.name ;
  countryName = resObj.location.country ;
  weather = resObj.current.temp_c ;
  
  cityNameDiv.innerText = cityName ;
  countryNameDiv.innerText = countryName ;
  weatherDiv.innerText = weather ;

  input.value = ""
}

input.addEventListener("change" , init)