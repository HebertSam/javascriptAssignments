$(document).ready(function(){
  console.log("hi there");
    for (var i = 1; i < 152; i++) {
      $(".poke").append(`<img src = "http://pokeapi.co/media/img/${i}.png">`);
      // console.log(i);
    }

})
