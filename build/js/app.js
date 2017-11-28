(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi(name) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.timer = 30;
    // foodLvl=10;
  }
  //
  // setWatch() {
  //   setInterval(() => {
  //     this.timer--;
  //   }, 1000);
  // }

  _createClass(Tamagotchi, [{
    key: "setWatch",
    value: function setWatch() {
      var _this = this;

      var powerSwitch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var watch = setInterval(function () {
        if (_this.timer === 0 || !powerSwitch) {
          clearInterval(_this.watch);
          _this.timer = 30;
          return;
        } else {
          _this.timer--;
        }
      }, 1000);
    }
  }, {
    key: "feedTommy",
    value: function feedTommy() {
      this.timer += 5;
    }
  }]);

  return Tamagotchi;
}();

;

},{}],2:[function(require,module,exports){
"use strict";

var _tamagotchi = require("./../js/tamagotchi.js");

function updateTimer(thing) {
  var clock = setInterval(function () {
    $("h2#LOG").text("Countdown: " + thing.timer);
    switch (true) {
      case thing.timer >= 20:
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/happy.png\">");
        break;
      case thing.timer < 20 && thing.timer >= 15:
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/neutral.png\">");
        break;
      case thing.timer < 15 && thing.timer >= 10:
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/frowny.png\">");
        break;
      case thing.timer < 10:
        $("div.images").empty();
        $("div.images").append("<img src=\"./root/img/Awright_Facebones!.jpg\">");
        break;
      default:
        break;
    }
  }, 100);
};

$(document).ready(function () {

  var newTommy = new _tamagotchi.Tamagotchi();
  newTommy.setWatch();
  updateTimer(newTommy);
  $("button[name=feed]").click(function () {
    newTommy.feedTommy();
    updateTimer(newTommy);
  });

  $('#weatherLocation').click(function () {
    var city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4fe31b1ab707c609be7079e2f483e826",
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function success(response) {
        $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
        $('.showTemp').text("The temperature in Kelvins is " + response.main.temp + ".");
      },
      error: function error() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});

},{"./../js/tamagotchi.js":1}]},{},[2]);
