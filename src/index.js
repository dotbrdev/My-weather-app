import "./styles.css";

window.onload = function() {
  document.getElementById('city').focus()
  }
  
  let input = document.getElementById('city');
  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById('send').click();
    }
  });
  
  send.onclick = function() {
      let apiKey ='d420b84213167c93636ac51327537114';
      let city = document.getElementById('city').value;
      let uri ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;
    
      let request = new XMLHttpRequest();
      request.open('GET',uri,true);
      request.onload = function(){
        let data = JSON.parse(this.response);
        let temp = data.main.temp;
        let tempMax = data.main.temp_max;
        let tempMin = data.main.temp_min;
        let meteo = data.weather[0].description;
        temp = parseInt(temp) - 273.15;
        temp = temp.toFixed(1);
        tempMax = parseInt(tempMax) - 273.15;
        tempMax = tempMax.toFixed(1);
        tempMin = parseInt(tempMin) - 273.15;
        tempMin = tempMin.toFixed(1);
        let output = document.getElementById('output').innerHTML =  meteo + " | " + temp + "°C "
        let outputTwo = document.getElementById('output-two').innerHTML = " Max" + ": " + tempMax + "°C " + " | " + " Min" + ": " + tempMin + "°C " 
      }
      request.send()
      }