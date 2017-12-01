var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#INFO").hide();
  let rawFeed = (feed) => {
    feed.forEach( (x)=>{ x.forEach( (y)=>{ $("#RAW").append("<li>${y}</li>"); }); });
  };
  $("#PASS").click( ()=>{
    let para = $("input[name=paragraphs]").val();
    let word = $("input[name=words]").val();

    $("input[name=paragraphs]").val("");
    $("input[name=words]").val("");

    let dinoPromise = new Promise(function(resolve,reject){
      let dinoRequest = new XMLHttpRequest();
      let url = "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${para}&words=${word}";
      dinoRequest.onload = function(){
        if(this.status == 200) {
          resolve( dinoRequest.response );
        }
        else {
          reject( ()=>{ console.log('Where did all the dinosaurs go?'); });
        }
        dinoRequest.open("GET",url,true);
        dinoRequest.send();
      };
    });
    dinoPromise.then(function(response) {rawFeed(dinoRequest);},
                     function()         {console.log("err")});
  });

});
