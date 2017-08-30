console.log("hello");
$(document).ready(function(){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var key = '55e0910892d869cf892d21b29375ff6e';

  $('form').submit(function(){
    var loc = $('form').find('input[name="search"]').val();
    console.log(loc);
    $('.temp').append('<h3>hello world</>');
    $.get(url + loc + '&&appid=' + key, function(data){
      // console.log(data);
      var temp = data.main.temp;
      temp = Math.floor((9/5)*(temp - 273) + 32);
      var html_str = '';
      html_str += `<h1>${loc}</h1>`;
      html_str += `<h3>${temp}</h3>`;

      $('.temp').html(html_str);
      console.log(temp);
    } ,'JSON')
    return false;
  })

})
