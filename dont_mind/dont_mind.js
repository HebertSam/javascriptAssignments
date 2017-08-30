function time1() {
  var hour = 8;
  var min = 50;
  var period = "AM";

  if (min > 30 && period === "AM") {
    console.log("it's almost", hour + 1, "in the morning");
  }else if (min < 30 && period === "AM") {
    console.log("its just after", period, "in the morning");
  }else if (min > 30 && period === "PM") {
    console.log("its almost", hour + 1, "in the afternoon");
  }else if (min < 30 && period === "PM") {
    console.log("its just after", period, "in the morning");
  }
}
time1();

function time2() {
  var hour = 7;
  var min = 15;
  var period = "PM";

  if (min > 30 && period === "AM") {
    console.log("it's almost", hour + 1, "in the morning");
  }else if (min < 30 && period === "AM") {
    console.log("its just after", period, "in the morning");
  }else if (min > 30 && period === "PM") {
    console.log("its almost", hour + 1, "in the afternoon");
  }else if (min < 30 && period === "PM") {
    console.log("its just after", hour, "in the morning");
  }
}
time2();
