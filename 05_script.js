let  cityInput = document.getElementById("input");
let btn = document.getElementById("add");
key = "3045dd712ffe6e702e3245525ac7fa38"

btn.addEventListener('click', ()=>{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+key)
.then(res=>res.json())
.then (data => {

let city = document.querySelector('#cityname')
let temp = document.querySelector('#temp')
let text = document.querySelector('#condition')
let wind = document.querySelector('#wind')

function convertion(val){
    return (val - 273).toFixed(2)
}

    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var temperature = data['main']['temp']
    var wndspd = data['wind']['speed']


    //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
    city.innerHTML=`Weather of ${nameval}`
    temp.innerHTML = `Temperature: ${ convertion(temperature)} C`
    text.innerHTML = `Sky Conditions: ${descrip}`
    wind.innerHTML = `Wind Speed: ${wndspd} km/h`

})

    .catch(err => alert('You entered Wrong city name'))
})


/* --------Uncomment Below Part For CSS Render --------------*/

// {
//     let cityInput = "berlin";
//     key = "3045dd712ffe6e702e3245525ac7fa38"
    
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid='+key)
//     .then(res=>res.json())
//     .then (data => {
    
//     let city = document.querySelector('#cityname')
//     let temp = document.querySelector('#temp')
//     let text = document.querySelector('#condition')
//     let wind = document.querySelector('#wind')
    
//     function convertion(val){
//         return (val - 273).toFixed(2)
//     }
    
//         var nameval = data['name']
//         var descrip = data['weather']['0']['description']
//         var temperature = data['main']['temp']
//         var wndspd = data['wind']['speed']
    
    
//         //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
//         city.innerHTML=`Weather of ${nameval}`
//         temp.innerHTML = `Temperature: ${ convertion(temperature)} C`
//         text.innerHTML = `Sky Conditions: ${descrip}`
//         wind.innerHTML = `Wind Speed: ${wndspd} km/h`
    
//     })
    
//     .catch(err => alert('You entered Wrong city name'))
//     }