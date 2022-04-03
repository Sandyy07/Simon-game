var gamePattern=[];
var userClickedPattern=[];
var buttonColours =["red", "blue", "green", "yellow"];
var level=0;
var started = false;

$(document).keydown(function(){
  if(!started){
  $("h1").text("level "+level);
  nextSequence();
started=true;
}
});

$(".btn").click(function(){
  var userChosenColour= $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){


if(gamePattern.length==userClickedPattern.length){
  setTimeout(function(){
    nextSequence();
  }),1000;
}
}else{
  playSound("wrong");
  $("h1").text("Game Over, Press Any Key to Restart" );
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  startOver();
}
}

function nextSequence(){

  userClickedPattern=[];
  var a=Math.random();
  var randomNumber=Math.floor(a*4);
  var randomChosenColour =buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("h1").text("level "+level);
}

function playSound(name){
  var music =new Audio("sounds/"+name+".mp3");
  music.play();
}
function animatePress(currentcolor){
  $(".btn").addClass("pressed");
  setTimeout(function(){
    $(".btn").removeClass("pressed");
  },100);
}




function startOver(){
  var level=0;
  var started = false;
  var gamePattern=[];

}
