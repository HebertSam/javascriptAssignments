// console.log("page is linked");
$(document).ready(function(){
  // console.log("jquery works");
  $(".form1").submit(function(){

    var firstName = $("form").find('input[name="first_name"]').val();
    console.log(firstName);
    var lastName = $("form").find('input[name="last_name"]').val();
    console.log(lastName);
    var email = $("form").find('input[name="email"]').val();
    console.log(email);
    var contact = $("form").find('input[name="contact"]').val();
    console.log(contact);
    $("table").append("<tr>"+"<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + email + "</td>" + "<td>" + contact +"</td>" +"</tr>");
    return false;
  })
})
