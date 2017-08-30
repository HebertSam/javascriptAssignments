function fewBillion() {
  var total = .01;
  for (var i = 1; i <= 30; i++) {
    total = total + total;
  }
  console.log("you made", total);
}
fewBillion();

function to10000() {
  var total = .01;
  for (var i = 1; i <= 30; i++) {
    total = total + total;
    if (total >= 10000) {
      console.log(i);
      break;
    }
  }
  console.log("you made", total);
}
to10000();

function toAbillion(x) {
  var total = .01;
  var count = 0;
  while (total <= x) {
    total = total + total;
    count++;
  }
  console.log(count);
}
toAbillion(10000);
