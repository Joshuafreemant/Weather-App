
const weatherContainerEl = document.getElementById('weatherContainer');
const main = document.getElementById('main');
const contain = document.getElementById('contain');
const searchEl = document.getElementById('search');
const form = document.getElementById('form');
const APIURL = `https://goweather.herokuapp.com/weather/`;



getWeatherByLocation('Abuja');

async function getWeatherByLocation(location) {


    const resp = await fetch(APIURL + location);
    const respData = await resp.json();
    const tempData = respData.temperature;
    const windData = respData.wind;
    const description = respData.description;
    const forecasts = respData.forecast;
    // console.log(tempData)
    // console.log(windData)
    // console.log(description)

    // console.log('forecast', forecasts[0])
    // console.log(respData)


    

    
    main.innerHTML='';
    const currentDate = new Date();
    let weekday = new Array(8);
 
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] = "Sunday";
    weekday[8] = "";
    if(weekday[8] === weekday[8]){
        weekday[8] =  weekday[1];
       
    }
    

    const currentDay = weekday[currentDate.getDay()+ 1];
    const nextDay = weekday[currentDate.getDay() +2];
    const thirdDay = weekday[currentDate.getDay()+3 ];
    
    const weatherEl = document.createElement('div');
    weatherEl.classList.add('content');
   
    weatherEl.innerHTML = `
    <p class="p">${location}</p>
    
    <i class="bigicon fas fa-cloud-moon"></i>

    <h2>${respData.temperature}</h2>
    <h3>${respData.wind}</h3>
    <p class="desc">${respData.description}</p>
  </div>
  
  <div class="bottom">
    <h4 class="bottom-heading">Weather Forecasts</h4>
  
    <div class="body">
      <div class="time">
        <div>

          <a href="#">${currentDay}</a>
          <h4><i class="fas fa-cloud-sun-rain"></i> ${respData.forecast[0].temperature}</h4>
        </div>
  
        <div>
          <a href="#">${nextDay}</a>
          <h4><i class="fas fa-cloud-sun-rain"></i> ${respData.forecast[1].temperature}</h4>
        </div>
  
        <div>
          <a href="#">${thirdDay}</a>
          <h4><i class="fas fa-cloud-sun-rain"></i> ${respData.forecast[2].temperature}</h4>
        </div>
      </div>
    </div>
    `;
    main.appendChild(weatherEl);
    

}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const locate = searchEl.value;
    if (locate) {
        getWeatherByLocation(locate);
       
        searchEl.value="";
    }

});


