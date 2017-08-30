$(document).ready(function(){
  // console.log("things are working");
  // $(document).on(function(){
    // $('.card_back').hide();
  // })

  $('.card_box').on('click', 'p', function(event){

    $('.card_front').hide(function(){
      $('.card_back').show();
    });
    console.log("click1");
  })
  $('.card_box').on('click', 'p', function(event){

    $('.card_back').hide();
    $('.card_front').show();

    console.log('click2');

  })

  $(document).on('click', '.btn', function(){
      var firstName = $("form").find('input[name="first_name"]').val();
      console.log(firstName);
      var lastName = $("form").find('input[name="last_name"]').val();
      console.log(lastName);
      var description = $("form").find('textarea[name="description"]').val();
      console.log(description);
      $('.card_box').append('<div class="card_front">'+'<h1>'+ firstName + lastName + '</h1>' + '<p>click for description</p>' + '</div>');
      $('.card_box').append('<div class="card_back">'+'<p>'+ description +'</p>' + '</div>');

      return false;

    })

})
