 var inputCity = "new york"
 var currentApiURL = "http://api.openweathermap.org/data/2.5/weather?appid=4a59a79934685f39d5acd8c224d29d12&q="
 var oneCallApiURL 
 var cityInputEl = document.getElementById("weather-search")
 var formEl = document.getElementById("weather-form")

$(document).ready(function () {
    var cities = [];
    var city;
    var latitude;
    var longitude;
    var queryURL3;
    function cityButtons() {
      $("#cityList").empty();
      for (var i = 0; i < cities.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-primary newCity");
        a.attr("city-name", cities[i]);
        a.text(cities[i]);
        $("#cityList").append(a);
      }
    }
  
    $("#searchButton").on("click", function (event) {
      event.preventDefault();
      var city = $("#city").val();
      cities.push(city);
      cityButtons();
      var queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=4a59a79934685f39d5acd8c224d29d12";
  
      var queryURL2 =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&APPID=4a59a79934685f39d5acd8c224d29d12";
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
  
        var latitude = response.coord.lat;
        var longitude = response.coord.lon;
        $(".currentName").text(response.name);
        var adjustedTemp = response.main.temp * (9 / 5) - 459.67;
        $(".temperature").text(
          "Current Temperature: " + adjustedTemp.toFixed(1) + "°F"
        );
  
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind").text("Wind Speed is: " + response.wind.speed + "MPH");
        var currentSlide = response.weather[0].icon;
        var getIcon =
          "http://openweathermap.org/img/wn/" + currentSlide + "@2x.png";
        $(".currentImage").attr("src", getIcon);
      });
  
      $.ajax({
        url: queryURL2,
        method: "GET",
      }).then(function (response) {
  
        var getDate1 = luxon.DateTime.fromSeconds(
          response.list[0].dt
        ).toLocaleString({
          month: "short",
          day: "2-digit",
        });
  
        $(".day1date").text("Date: " + getDate1);
        var futureTempCalc = response.list[2].main.temp * (9 / 5) - 459.67;
        $(".day1temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
        $(".day1hum").text("Humidity: " + response.list[2].main.humidity + "%");
        var day1Slide = response.list[2].weather[0].icon;
        var getDay1Icon =
          "http://openweathermap.org/img/wn/" + day1Slide + "@2x.png";
        $("#day1Icon").attr("src", getDay1Icon);
  
        var getDate2 = luxon.DateTime.fromSeconds(
          response.list[10].dt
        ).toLocaleString({
          month: "short",
          day: "2-digit",
        });
        $(".day2date").text("Date: " + getDate2);
        var futureTempCalc = response.list[10].main.temp * (9 / 5) - 459.67;
        $(".day2temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
        $(".day2hum").text("Humidity: " + response.list[1].main.humidity + "%");
        var day2Slide = response.list[10].weather[0].icon;
        var getDay2Icon =
          "http://openweathermap.org/img/wn/" + day2Slide + "@2x.png";
        $("#day2Icon").attr("src", getDay2Icon);
  
        var getDate3 = luxon.DateTime.fromSeconds(
          response.list[18].dt
        ).toLocaleString({
          month: "short",
          day: "2-digit",
        });
        $(".day3date").text("Date: " + getDate3);
        var futureTempCalc = response.list[18].main.temp * (9 / 5) - 459.67;
        $(".day3temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
        $(".day3hum").text("Humidity: " + response.list[18].main.humidity + "%");
        var day3Slide = response.list[18].weather[0].icon;
        var getDay3Icon =
          "http://openweathermap.org/img/wn/" + day3Slide + "@2x.png";
        $("#day3Icon").attr("src", getDay3Icon);
  
        var getDate4 = luxon.DateTime.fromSeconds(
          response.list[26].dt
        ).toLocaleString({
          month: "short",
          day: "2-digit",
        });
        $(".day4date").text("Date: " + getDate4);
        var futureTempCalc = response.list[26].main.temp * (9 / 5) - 459.67;
        $(".day4temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
        $(".day4hum").text("Humidity: " + response.list[26].main.humidity + "%");
        var day4Slide = response.list[26].weather[0].icon;
        var getDay4Icon =
          "http://openweathermap.org/img/wn/" + day4Slide + "@2x.png";
        $("#day4Icon").attr("src", getDay4Icon);
  
        var getDate5 = luxon.DateTime.fromSeconds(
          response.list[34].dt
        ).toLocaleString({
          month: "short",
          day: "2-digit",
        });
        $(".day5date").text("Date: " + getDate5);
        var futureTempCalc = response.list[34].main.temp * (9 / 5) - 459.67;
        $(".day5temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
        $(".day5hum").text("Humidity: " + response.list[34].main.humidity + "%");
        var day5Slide = response.list[34].weather[0].icon;
        var getDay5Icon =
          "http://openweathermap.org/img/wn/" + day5Slide + "@2x.png";
        $("#day5Icon").attr("src", getDay5Icon);
      });
    });
  
    $("#clearButton").on("click", function () {
      $("#cityList").remove();
      console.log("click");
    });
});