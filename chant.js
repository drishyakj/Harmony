var count = 0;
var started = false;

$(document).click(function() {
  if (!started) {
    started = true;
    $("#level-title").text("Chant " + count);

  }
});

$(".btn-chant").click(function() {
  var limit = $(".limit").val();
  if (limit == 0 || count < limit) {
    animatePress("counter");
    count++;
    $("#level-title").text("Chant " + count);
    $("h6").text("");

  } else {
    playSound("bell");
    startOver();
  }
});
$(".reset").click(function() {
  $("#level-title").text("Chant Counter");
  $(".limit").val(0);
  $("h6").text("Click to Count");
  count = 0;
});

function animatePress(currentColour) { // animate button when user clicks on it
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(name) { //play sound when random colour is generated
  var audio = new Audio("sounds/" + name + ".mpeg");
  audio.play();
}

function startOver() {
  count = 0;
  limit = 0;
  started = false;
}
