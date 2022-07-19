var input = document.querySelector(".input_city");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");

var button = document.querySelector(".submit");

button.addEventListener("click", function (city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=9c43551d9298b0a88b9132765cdebe98"
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data["main"]["temp"];
      var cityName = data["name"];
      var descValue = data["weather"][0]["description"];

      main.innerHTML = cityName;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      input.value = "";
    })

    .catch((err) => alert("Can not find city! Please, try again."));
});
