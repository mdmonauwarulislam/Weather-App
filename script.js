const apiKeys ="36375bff1def875d6bc0b5ddf2b84aa5";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".inputField");
const buttonInput = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weatherImg")

async function getWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKeys}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Info").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp)+"°C";
        document.querySelector("#humidity").innerText = data.main.humidity+"%";
        document.querySelector("#wind").innerText = data.wind.speed+"km/h";
    
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".Info").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

   

}

buttonInput.addEventListener('click', () => {
    getWeather(searchInput.value);
})