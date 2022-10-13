let cityInput = document.querySelector("#input")
let btn =  document.querySelector("#add")
key = "3045dd712ffe6e702e3245525ac7fa38"

btn.addEventListener('click', ()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+key)
    .then(res=>res.json())
    .then (res => {

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
    
    
        function convertion(val) {
            return (val-273).toFixed(1);
        }

        document.querySelector(".flag").innerHTML = `<img id=flagsize src="https://countryflagsapi.com/png/${country}">`
        document.querySelector("#cityOutput").innerHTML = `${city} , ${country}`
        document.querySelector("#temp").innerHTML = `${convertion(temperature)}&#186`
        document.querySelector("#ext").innerHTML = `&#8595 ${convertion(minTemp)}&#186 &nbsp &#8593 ${convertion(maxTemp)}&#186`
        document.querySelector("#press").innerHTML = `<img src="./barometer.png"></img>`+`${pressure} hPA`
        document.querySelector("#humid").innerHTML = `<img src="./humidity.png">`+`${humidity}%`
        document.querySelector("#descrip").innerHTML = `${description}`
        document.querySelector("#fL").innerHTML = `Feels like: ${convertion(feelLike)}&#186`
        document.querySelector("#windSpeed").innerHTML = `<img id="windIcon" src="./wind.png">`+`&nbsp${wndspd} km/h`
        document.querySelector("#iconDiv").innerHTML = `<img id="wIcon" src="http://openweathermap.org/img/wn/${icon}@2x.png" >`
    
        function displayTime(){

            let time = res ['timezone']
            let b = new Date();
            let utc=b.getTime()+(b.getTimezoneOffset()*60000);
            let nd=new Date(utc+(1000*(time)));
            let hrs = nd.getHours();
            let min = nd.getMinutes();
            let sec = nd.getSeconds();
            let session = document.getElementById('session');
            let day = nd.getDate();
            let month = nd.getMonth();
            let year  = nd.getFullYear();
    
            if(hrs >= 12){
                session.innerHTML = 'PM';
            }else{
                session.innerHTML = 'AM';
            }
    
            if(hrs > 12){
                hrs = hrs - 12;
            }

            if(hrs == 0){
               hrs = 12;
            }
    
            document.getElementById('hours').innerHTML = `Local time ${hrs}`;
            document.getElementById('minutes').innerHTML = `: ${min}`;
            document.getElementById('seconds').innerHTML = `: ${sec}`;
            document.getElementById('date').innerHTML = `${day}`
            document.getElementById('month').innerHTML = `/${month}`
            document.getElementById('year').innerHTML = `/${year}`

        }
        setInterval(displayTime, 10) 
    })

    .catch(err => alert('Hmm......Something is wrong'))

})