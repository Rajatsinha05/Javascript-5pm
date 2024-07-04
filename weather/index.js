
const mapper = (data) => {
    document.getElementById("weather").innerHTML = ""
    let temp = document.createElement("h1")
    temp.innerHTML = Math.round(data.main.temp)

    let name = document.createElement("h3")
    name.innerHTML = data.name
    document.getElementById("weather").append(temp, name)
}

const getWeather = async (cityname) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let res = await req.json()
    console.log(res);
    mapper(res)
}

document.getElementById("cityform").addEventListener("submit", (e) => {
    e.preventDefault();
    let cityname = document.getElementById("cityName").value

    getWeather(cityname)


})


const getWeatherByLocation = async (lat, long) => {

    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let res = await req.json()
    mapper(res)
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let long = position.coords.longitude
        getWeatherByLocation(lat, long)

    })
}

getLocation()

