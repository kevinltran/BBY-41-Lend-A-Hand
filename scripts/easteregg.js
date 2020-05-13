const rob = document.getElementById("Rob");
const leon = document.getElementById("Leon");
const kevin = document.getElementById("kevin");
const oves = document.getElementById("Oves");
const corn = document.getElementById("corndiv");
const tp = document.getElementById("tpdiv");
const oranges = document.getElementById("orangesdiv");
const lettuce = document.getElementById("lettucediv");

const hideAnim = {
  "duration": 2000,
  "easing": "swing"
}

const showAnim = {
  "duration": 3500,
  "easing": "swing"
}

const showItem = {
  "duration": 800,
  "easing": "swing"
}

let string = "";

$("#bag").hide();
$("#cornimg").hide();
$("#orangeimg").hide();
$("#tpimg").hide();
$("#lettuceimg").hide();
$(".item").css("position", "fixed");
$(".item").css("width", "12vmax");
$(".item").css("height", "12vmax");
$("#lettucediv").css("left", "60px");
$("#lettucediv").css("top", "45px");
$("#corndiv").css("right", "250px");
$("#corndiv").css("top", "290px");
$("#orangesdiv").css("left", "55px")
$("#orangesdiv").css("bottom", "10px");
$("#tpdiv").css("right", "22px");
$("#tpdiv").css("bottom", "222px");

rob.onclick = function () {
  string += "a";
  console.log(string);
  startGame();
}

leon.onclick = function () {
  string += "b";
  console.log(string);
  startGame();
}

kevin.onclick = function () {
  string += "c";
  console.log(string);
  startGame();
}

oves.onclick = function () {
  string += "d";
  console.log(string);
  startGame();
}

function startGame() {
  if (string.includes("cabd")) {
    $("main").hide(hideAnim);
    $("#bag").show(showAnim);
    // $(".item").show(showAnim);

  }
}


corn.onclick = function () {
  $("#cornimg").show(showItem);
}

oranges.onclick = function () {
  $("#orangeimg").show(showItem);
}

lettuce.onclick = function () {
  $("#lettuceimg").show(showItem);
}

tp.onclick = function () {
  $("#tpimg").show(showItem);
}
