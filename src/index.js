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
        
        let temp= data.main.temp;
        console.log(data);
        let meteo = data.weather[0].main;
        temp = parseInt(temp) - 273;
        let output = document.getElementById('output').innerHTML= " In " + city + ": " + meteo + " -- " + temp + "°C "
      
      }
      request.send()
      }

      let options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
      };