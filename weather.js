
let btn=document.querySelector(".sbutton");
let img = document.querySelector(".weather-icon");
btn.addEventListener('click',() =>
{
    let cityValue = document.querySelector(".sinput").value;
    findme(cityValue);
})
function findme(cityValue) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=217a63e62476eb0bfe92f96d8f66eacf&units=metric`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            document.querySelector(".temp").innerHTML=data.main.temp;
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".wind").innerText=`${data.wind.speed} km/h`;
            document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`;
            let newSrc = "";
            if (data.weather[0].main === "Clear") {
                newSrc = "images/clear.png";
            } else if (data.weather[0].main === "Rain") {
                newSrc = "images/rain.png";
            } else if (data.weather[0].main === "Clouds") {
                newSrc = "images/clouds.png";
            } else if (data.weather[0].main === "Snow") {
                newSrc = "images/snow.png";
            } else {
                newSrc = "images/default.png"; // Default image
            }
            img.src = newSrc;
        })
}