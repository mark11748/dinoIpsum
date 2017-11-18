(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function () {
  function Age() {
    _classCallCheck(this, Age);

    this.age = 0;
    this.mars = 0;
    this.venus = 0;
    this.mercury = 0;
    this.jupiter = 0;
    this.lifeExpectancy = 85;
  }

  _createClass(Age, [{
    key: "secondConverter",
    value: function secondConverter(date) {
      var today = new Date();
      var todaysSeconds = today.getTime();
      var datesSeconds = date.getTime();
      var totalSeconds = (todaysSeconds - datesSeconds) / 1000;
      return totalSeconds;
    }
  }, {
    key: "ageChecker",
    value: function ageChecker(date) {
      var seconds = this.secondConverter(date);
      var years = seconds / 3.154e+7;
      this.age = Math.floor(years);
      return years;
    }
  }, {
    key: "mercuryConverter",
    value: function mercuryConverter(date) {
      var mercury = this.ageChecker(date) / .24;
      this.mercury = Math.floor(mercury);
    }
  }, {
    key: "venusConverter",
    value: function venusConverter(date) {
      var venus = this.ageChecker(date) / .62;
      this.venus = Math.floor(venus);
    }
  }, {
    key: "marsConverter",
    value: function marsConverter(date) {
      var mars = this.ageChecker(date) / 1.88;
      this.mars = Math.floor(mars);
    }
  }, {
    key: "jupiterConverter",
    value: function jupiterConverter(date) {
      var jupiter = this.ageChecker(date) / 11.86;
      this.jupiter = Math.floor(jupiter);
    }
  }, {
    key: "yearsToLive",
    value: function yearsToLive(choice) {
      if (choice === "Mercury") {
        var lifeLeft = Math.floor(this.lifeExpectancy / .24) - this.mercury;
        if (lifeLeft < 0) {
          return "You're older than the average life expectancy!";
        } else {
          return lifeLeft;
        }
      }
      if (choice === "Venus") {
        var _lifeLeft = Math.floor(this.lifeExpectancy / .62) - this.venus;
        if (_lifeLeft < 0) {
          return "You're older than the average life expectancy!";
        } else {
          return _lifeLeft;
        }
      }
      if (choice === "Mars") {
        var _lifeLeft2 = Math.floor(this.lifeExpectancy / 1.88) - this.mars;
        if (_lifeLeft2 < 0) {
          return "You're older than the average life expectancy!";
        } else {
          return _lifeLeft2;
        }
      }
      if (choice === "Jupiter") {
        var _lifeLeft3 = Math.floor(this.lifeExpectancy / 11.86) - this.jupiter;
        if (_lifeLeft3 < 0) {
          return "You're older than the average life expectancy!";
        } else {
          return _lifeLeft3;
        }
      }
    }
  }]);

  return Age;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _Age = require("./../js/Age.js");

$(document).ready(function () {
  $(".results").hide();
  $("#form").submit(function (event) {
    event.preventDefault();
    var newAge = new _Age.Age();
    var input = $("#birthdate").val();
    newAge.mercuryConverter(input);
    newAge.venusConverter(input);
    newAge.marsConverter(input);
    newAge.jupiterConverter(input);
    $(".results").show();
    $("#mercury-age").text(newAge.mercury + " Mercury Years Old");
    $("#venus-age").text(newAge.venus + " Venus Years Old");
    $("#mars-age").text(newAge.mars + " Mars Years Old");
    $("#jupiter-age").text(newAge.jupiter + " Jupiter Years Old");
    $("#mercury-expect").text(newAge.yearsToLive("Mercury") + " Mercury years left to live");
    $("#venus-expect").text(newAge.yearsToLive("Venus") + " Venus years left to live");
    $("#mars-expect").text(newAge.yearsToLive("Mars") + " Mars years left to live");
    $("#jupiter-expect").text(newAge.yearsToLive("Jupiter") + " Jupiter years left to live");
  });
});

},{"./../js/Age.js":1}]},{},[2]);
