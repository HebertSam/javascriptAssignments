$(document).ready(function(){

  $("#button1").click(function() {
    $(".text1").toggle()
  });

  $("#button2").click(function(){
    $(".text2").slideToggle()
  });

  $("#button3").click(function(){
    $(".text3").fadeToggle()
  });

  $("#button4").click(function(){
    $(".text4").append(">>>")
  });

  $("#button5").click(function(){
    $(".text5").text("I changed this text")
  });

  $("#button6").click(function(){
    $(".text6").addClass("addedClass")
  });

  $("#button7").click(function(){
    $(".text7").after("I added this text")
  });

  $("#button8").click(function(){
    $(".text8").before("I added this text too!")
  });

   $("#button9").click(function(){
     var name = $("#input1").val();
     alert(name);
   });
   $(".text10").hide();

   $("#button10").hover(function(){
     $(".text10").slideToggle()
   });
   
});
