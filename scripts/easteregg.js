// This js file is used for the easter egg

const rob = document.getElementById("pic1");
const leon = document.getElementById("pic2");
const kevin = document.getElementById("pic3");
const oves = document.getElementById("pic4");
const corn = document.getElementById("corndiv");
const tp = document.getElementById("tpdiv");
const oranges = document.getElementById("orangesdiv");
const lettuce = document.getElementById("lettucediv");

// Hides the main content on the about us index page
const hideAnim = {
  "duration": 2000,
  "easing": "swing"
}

// Transitions into the easter egg content
const showAnim = {
  "duration": 3500,
  "easing": "swing"
}

// Shows the items when they are clicked on
const showItem = {
  "duration": 800,
  "easing": "swing"
}

// String "Password" for easter egg activation
let string = "";

// UI and css for easter egg content
$("#bag").hide();
$("#bag").css("transform", "translate(0px, 70px)");
$("#bag").css("height", "100vh");
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

// Event handlers for clicking on div pictures

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

// "Starts" the hunt once password is inputted
function startGame() {
  if (string.includes("cabd")) {
    $("#everything").hide(hideAnim);
    $("#bag").show(showAnim);
  }
}

// Handles the click functions for the hidden items

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
