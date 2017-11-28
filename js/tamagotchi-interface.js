import { Tamagotchi } from './../js/tamagotchi.js';


function updateTimer(thing) {
  const clock = setInterval(() => {
    $("h2#LOG").text(`Countdown: ${thing.timer}`);
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
