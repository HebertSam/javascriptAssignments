$(document).ready(function(){
  // console.log("hi there");
    var url = 'http://pokeapi.co/api/v2/pokemon/';

    for (var i = 1; i < 152; i++) {
      $(".poke").append(`<img id="${i}" src = "http://pokeapi.co/media/img/${i}.png">`);
      // console.log(i);
    }

    $('img').click(function(){
      var pokeNum = $(this).attr('id');
      $.get(url + pokeNum, function(data) {
        var html_str = '';
        html_str += `<h2>${data.name}</h2>`;
        html_str += `<img src="${data.sprites.front_default}"> `
        html_str += `<h4>Types</h4>`;
        html_str += `<ul>`;
        for (var i = 0; i < data.types.length; i++) {
          html_str += `<li>${data.types[i].type.name}</li>`;
        }
        html_str += `</ul>`;
        html_str += `<h4>Height<h4>`;
        html_str += `<p>${data.height}<p>`;
        html_str += `<h4>Weight</h4>`;
        html_str += `<p>${data.weight}</p>`;

        $('.my_poke').html(html_str);
        console.log(data);
      })
      console.log(pokeNum);
    })
  })
