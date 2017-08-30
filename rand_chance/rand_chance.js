function slots() {
  var win = 35;

  var spin = Math.floor(Math.random()*100);


  for (var i = 10; i < 0; i--) {
    var winAmount = Math.floor((Math.random() * 100) + 50);
    if (spin === win) {
      i = winAmount + i
      console.log("You win! Here's", winAmount, "coins. You now have", i, "coins");
    }
    else {
        quarters--;
      console.log("you lost and now have", i, "coins");
    }
  }
}
slots();
