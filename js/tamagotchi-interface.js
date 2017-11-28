import { Tamagotchi } from './../js/tamagotchi.js';


function updateTimer(thing) {
  const clock = setInterval(() => {
    $("h2#LOG").text(`Countdown: ${thing.timer}`);
    switch (true)
    {
      case (thing.timer>=20):
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/happy.png\">");
      break;
      case (thing.timer<20 && thing.timer>=15):
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/neutral.png\">");
      break;
      case (thing.timer<15 && thing.timer>=10):
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/frowny.png\">");
      break;
      case (thing.timer<10):
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/Awright_Facebones!.jpg\">");
      break;
      default:
      break;
    }
  },100);
};

$(document).ready(function() {

  let newTommy = new Tamagotchi();
  newTommy.setWatch();
  updateTimer(newTommy);
  $("button[name=feed]").click(function() {
    newTommy.feedTommy();
    updateTimer(newTommy);
  });

  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fe31b1ab707c609be7079e2f483e826`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
