
function PostButton(){
var city = document.getElementById("String").value;
  var Submit = new XMLHttpRequest();						//Create XMLH variable
  var payload =  document.getElementById("String").value;
  Submit.open('POST', 'http://httpbin.org/post', true);			//POST
  Submit.setRequestHeader('Content-Type', 'application/json');
  Submit.addEventListener('load', function(){						//Wait for load
    if (Submit.status >= 200 && Submit.status < 400){
      var response = JSON.parse(Submit.responseText);
      document.getElementById("resp").textContent = JSON.stringify(response.data);	//Output
    }
  });
  Submit.send(JSON.stringify(payload));
  event.preventDefault();					
};

