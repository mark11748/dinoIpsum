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
});
