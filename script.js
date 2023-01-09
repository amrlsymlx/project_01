        let cityInput = document.querySelector("#input")
        let btn =  document.querySelector("#add")
        key = "3045dd712ffe6e702e3245525ac7fa38"

        btn.addEventListener('click', ()=>{
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+key)
            .then(res=>res.json())
            .then (res => {

                const city = res.name
                const country = res['sys']['country']
                const temperature = res['main']['temp']
                const minTemp = res['main']['temp_min']
                const maxTemp = res['main']['temp_max']
                const pressure = res['main']['pressure']
                const humidity = res ['main']['humidity']
                const description = res['weather']['0']['description']
                const feelLike = res['main']['feels_like']
                const wndspd = res['wind']['speed']
                const icon = res['weather']['0']['icon']
    
    
                function convertion(val) {
                    return (val-273).toFixed(1);
                }

                document.querySelector(".flag").innerHTML = `<img id=flagsize src="https://countryflagsapi.com/png/${country}">`
                document.querySelector("#cityOutput").innerHTML = `${city} , ${country}`
                document.querySelector("#temp").innerHTML = `${convertion(temperature)}&#8451`
                document.querySelector("#ext").innerHTML = `&#8595 ${convertion(minTemp)}&#8451 &nbsp &#8593 ${convertion(maxTemp)}&#8451`
                document.querySelector("#press").innerHTML = `<img src="https://github.com/amrlsymlx/project_01/raw/main/01_barometer.png"></img>`+`&nbsp ${pressure} hPA`
                document.querySelector("#humid").innerHTML = `<img src="https://github.com/amrlsymlx/project_01/raw/main/02_humidity.png">`+`&nbsp ${humidity}%`
                document.querySelector("#descrip").innerHTML = `${description}`
                document.querySelector("#fL").innerHTML = `Feels like: ${convertion(feelLike)}&#8451`
                document.querySelector("#windSpeed").innerHTML = `<img id="windIcon" src="https://github.com/amrlsymlx/project_01/raw/main/03_wind.png">`+`&nbsp&nbsp ${wndspd} km/h`
                document.querySelector("#iconDiv").innerHTML = `<img id="wIcon" src="http://openweathermap.org/img/wn/${icon}@2x.png" >`
    
                function displayTime(){

                    const time = res ['timezone']
                    let date = new Date();
                    let utc0=date.getTime()+(date.getTimezoneOffset()*60000);
                    let newDate=new Date(utc0+(1000*time));
                    let hrs = newDate.getHours();
                    let min = newDate.getMinutes();
                    let sec = newDate.getSeconds();
                    let session = document.getElementById('session');
                    let day = newDate.getDate();
                    let month = newDate.getMonth();
                    let year  = newDate.getFullYear();
    
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