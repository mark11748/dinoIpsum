import { Age } from "./../js/Age.js";

$(document).ready(function(){
  $(".results").hide();
  $("#form").submit(function(event){
    event.preventDefault();
    let newAge = new Age();
    let input = $("#birthdate").val();
    newAge.mercuryConverter(input);
    newAge.venusConverter(input);
    newAge.marsConverter(input);
    newAge.jupiterConverter(input);
    $(".results").show();
    $("#mercury-age").text(`${newAge.mercury} Mercury Years Old`);
    $("#venus-age").text(`${newAge.venus} Venus Years Old`);
    $("#mars-age").text(`${newAge.mars} Mars Years Old`);
    $("#jupiter-age").text(`${newAge.jupiter} Jupiter Years Old`);
    $("#mercury-expect").text(`${newAge.yearsToLive("Mercury")} Mercury years left to live`);
    $("#venus-expect").text(`${newAge.yearsToLive("Venus")} Venus years left to live`);
    $("#mars-expect").text(`${newAge.yearsToLive("Mars")} Mars years left to live`);
    $("#jupiter-expect").text(`${newAge.yearsToLive("Jupiter")} Jupiter years left to live`);
  });
});
