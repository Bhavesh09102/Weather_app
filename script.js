
  const inputCity = document.getElementById("input-city");
  const cityNameDiv = document.querySelector(".city-name");



 inputCity.addEventListener("keydown", async function(event){
      if(event.key=="Enter"){
        const city = inputCity.value.trim();
       const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`;
       
       if (city) {
        cityNameDiv.textContent = city;
        inputCity.value = "";
      }
      
     const options = {
	    method: 'GET',
    	headers: {
		'x-rapidapi-key': '942dbe8493mshdfa46f001fe699cp15ce63jsn8ef39de7f45e',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.forecast.forecastday[0].day.maxtemp_c);
  	console.log(result.forecast.forecastday[0].day.condition.text);
    const con=document.getElementById("text");
    document.getElementById("text").textContent = "";
    con.textContent = `${result.forecast.forecastday[0].day.condition.text}`
    

    const temp_p=document.getElementById("temp");
    document.getElementById("temp").textContent = "";
    temp_p.textContent = `Temperature - ${result.forecast.forecastday[0].day.maxtemp_c}`

     
    const wind_p=document.getElementById("win");
    document.getElementById("win").textContent = "";
    wind_p.textContent = `WindSpeed - ${result.forecast.forecastday[0].day.maxwind_kph}`
    console.log(result.forecast.forecastday[0].day.maxwind_kph);
   const jsonweather = result.forecast.forecastday[0].day.condition.text;
const weather = document.querySelector(".weather-icon img");


const condition = jsonweather.toLowerCase();

if (weather) {
  if (condition.includes("rain") || condition.includes("drizzle")) {
    weather.src = "cloudy_rain.png"; // or cloud_rain_light.png
  } else if (condition.includes("snow")) {
    weather.src = "snow.png";
  } else if (condition.includes("thunder") || condition.includes("storm") || condition.includes("lightning")) {
    weather.src = "cloud_lightinig.png";
  } else if (condition.includes("wind")) {
    weather.src = "wind.png";
  } else if (condition.includes("sun") || condition.includes("clear")) {
    weather.src = "sun.png";
  } else if (condition.includes("cloud")) {
    weather.src = "cloudy.png"; // or cloudy_rain.png or cloud-heavy-rain.png depending on condition
  } else {
    weather.src = "cloud_sun.png"; // fallback default
  }
}


} catch (error) {
	console.error(error);
}

      }
  })

