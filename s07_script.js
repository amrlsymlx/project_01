let cityInput = document.querySelector("#input")
let btn =  document.querySelector("#add")
key = "3045dd712ffe6e702e3245525ac7fa38"

btn.addEventListener('click', ()=>{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+key)
.then(res=>res.json())
.then (res => {

    let cityDisp = document.querySelector("#cityOutput")
    let tempDisp = document.querySelector("#temp") 
    let minMaxDisp = document.querySelector("#ext")
    let pressDisp = document.querySelector("#press")
    let humidDisp = document.querySelector("#humid")
    let descripDisp = document.querySelector("#descrip")
    let fLDisp = document.querySelector("#fL")
    let windDisp = document.querySelector("#windSpeed")
    let iconDisp = document.querySelector("#iconDiv")
    let flagDisp = document.querySelector(".flag")
    // let timeDisp = document.querySelector("#localTime")

    let city = res['name']
    let country = res['sys']['country']
    let temperature = res['main']['temp']
    let minTemp = res['main']['temp_min']
    let maxTemp = res['main']['temp_max']
    let pressure = res['main']['pressure']
    let humidity = res ['main']['humidity']
    let description = res['weather']['0']['description']
    let feelLike = res['main']['feels_like']
    let wndspd = res['wind']['speed']
    let icon = res['weather']['0']['icon']
    // let time = res ['timezone']
    
    function convertion(val) {
        return (val-273).toFixed(1);
        
    }

    cityDisp.innerHTML = `${city} , ${country}`
    tempDisp.innerHTML = `${convertion(temperature)}&#186`
    minMaxDisp.innerHTML = `&#8595 ${convertion(minTemp)}&#186 &nbsp &#8593 ${convertion(maxTemp)}&#186`
    pressDisp.innerHTML = `${pressure} hPA`
    humidDisp.innerHTML = `${humidity}%`
    descripDisp.innerHTML = `${description}`
    fLDisp.innerHTML = `Feels like: ${convertion(feelLike)}&#186`
    windDisp.innerHTML = `&nbsp${wndspd} km/h`
    iconDisp.innerHTML = `<img id="wIcon" src="http://openweathermap.org/img/wn/${icon}@2x.png" >`
    flagDisp.innerHTML = `<img id=flagsize src="https://countryflagsapi.com/png/${country}">`
    

})

.catch(err => alert('Hmm......Something is wrong'))

})