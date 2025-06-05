// document.addEventListener("DOMContentLoaded",()=>{
//     const CityInput = document.getElementById("city-input");
//     const WeatherBtn = document.getElementById("Weather-button");
//     const Weatherinfo = document.getElementById("WeatherInfo");
//     const CityName = document.getElementById("city-name");
//     const Temp = document.getElementById("temperature");
//     const description = document.getElementById("description");
//     const Errormessage = document.getElementById("ErrorMessage");

//     const API_KEY = "8dff08c584a09955f676fd34c350b045";

//     WeatherBtn.addEventListener("click" , async ()=>{
//         const city = CityInput.value.trim();
//         if(!city) return;
            
//         try{
//             const weatherData = await GetWeatherData(city);
//             DisplayWeather(weatherData)
//         } 
//          catch(error){
//             ShowError();
//         }
//     })

//     async function GetWeatherData(city){

//     }

//     function DisplayWeather(weatherData){

//     }

//     function ShowError(){
//         Weatherinfo.classList.add("hidden");
//         Errormessage.classList.remove("hidden");
//     }
// })


document.addEventListener('DOMContentLoaded' , () =>{
    const cityInput=document.getElementById("city-input");
    const getWeathearBtn=document.getElementById("Weather-button");
    const weatherInfo=document.getElementById("WeatherInfo");
     const cityName=document.getElementById("city-name");
     const temperatureDisplay=document.getElementById("temperature");
     const descriptionDisplay=document.getElementById("description");
     const errorMessage=document.getElementById("ErrorMessage");

    const API_KEY = "8dff08c584a09955f676fd34c350b045";

     getWeathearBtn.addEventListener('click', async () =>{
        const city = cityInput.value.trim();
        if(!city) return;

        try{
           const WeatherData = await fetchWeatherData(city);
           displayWeatherData(WeatherData)
        } catch(error){
            ShowErrorMessage();
        }


     })

     async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);

        if(!response.ok) {
            throw new Error("City not found !");
        }

        const data = await response.json();
        return data;
     }

     function displayWeatherData(data){
        console.log(data);
        const {name,main,weather} = data;
        cityName.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp}`;
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
     }

     function ShowErrorMessage(){
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
     }
    
})