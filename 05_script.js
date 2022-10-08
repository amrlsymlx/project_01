// let  cityInput = document.getElementById("input");
let cityInput = "berlin";
let btn = document.getElementById("add");

let city = document.querySelector('#cityname')
let temp = document.querySelector('#temp')
let text = document.querySelector('#condition')
let wind = document.querySelector('#wind')

let key = "3045dd712ffe6e702e3245525ac7fa38"

// console.log(cityInput);

function convertion(val){
    return (val - 273).toFixed(2)
}


{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid='+key)
// .then(res => console.log(res.json()))
.then(res=>res.json())
.then (data => {

    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']


    //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
    city.innerHTML=`Weather of ${nameval}`
    temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
    text.innerHTML = `Sky Conditions: ${descrip}`
    wind.innerHTML = `Wind Speed: ${wndspd} km/h`

})

    .catch(err => alert('You entered Wrong city name'))
}

// btn.addEventListener('click', ()=>{ })