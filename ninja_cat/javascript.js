$(document).ready(function(){

  $("img").click(function(){
    $(this).attr("alt-src");
    $(this).attr("placeholder", $(this).attr("src"));
    $(this).attr("src", $(this).attr("alt-src"));
    $(this).attr("alt-src", $(this).attr("placeholder"));

    console.log($(this).attr("src"));
    console.log($(this).attr("alt-src"));
  });

  // $(".ninja").click(function(){
  //   $(this).hide();
  // });

  // $(".ninja").click(function(){
  //   $(this).show(".cat")
  // });
});
