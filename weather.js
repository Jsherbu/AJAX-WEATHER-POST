//var APPID ="0ada012374e8b3a8039d620cefec02fe"; USE ONLY FOR TESTING FUNCTIONALITY, get your own at openweathermap . org
var temp;
var loc;
var humidity;
var wind;
var direction;
var zip;

function zipup(){
	var zip = document.getElementById("Ziptxt").value;
	var url= "http://api.openweathermap.org/data/2.5/weather?" + "zip=" + zip 
		+"&APPID=" + APPID;
		sendRequest(url);
}

function cityup(){
	var city = document.getElementById("citytxt").value;
	var url= "http://api.openweathermap.org/data/2.5/weather?q=" + city 
		+",us&APPID=" + APPID;
		sendRequest(url);
}
	
function sendRequest(url){
	var req = new XMLHttpRequest();
		req.open('POST', url, true);
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			var data = JSON.parse(req.responseText);
			var weather = {};
			weather.humidity = data.main.humidity;
			weather.windy = data.wind.speed;
			weather.direction = data.wind.deg;
			weather.loc = data.name;
			weather.temp = k2f(data.main.temp);
			update(weather);
		}
	};
	req.send(null);
}



function k2f(k){
    return Math.round(k*(9/5)-459.67);
}

function update(weather) {
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.windy;
    direction.innerHTML = weather.direction;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
}

window.onload = function(){
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");
}
