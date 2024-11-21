const buttonColors = ["red", "blue", "green", "yellow", "wrong"]
const sounds = {}

let gamePattern = []
let userClickedPattern = []
let level = 0
let isPlaing = true
let duration = 2000

loadSounds()
function loadSounds() {
  buttonColors.forEach(function (color) {
    sounds[color] = new Audio("sounds/" + color + ".mp3")
    sounds[color].preload = "auto"
  })
}

function nextSequence() {
  $("#level-title").text("Level " + ++level)
  const randomNumber = Math.floor(Math.random() * 4)
  const randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  playAndAnimateGamwPattern()
}

function playAndAnimateGamwPattern() {
  isPlaing = true
  setTimeout(function () {
    isPlaing = false
  }, gamePattern.length * duration)
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      playSound(gamePattern[i])
      $("#" + gamePattern[i])
        .fadeOut(100)
        .fadeIn(100)
    }, (i + 1) * duration)
  }
}

$(".btn").click(function () {
  if (isPlaing) return
  const userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)
})

$(document).keydown(function () {
  if (!gamePattern.length) {
    nextSequence()
  }
})

function playSound(color) {
  sounds[color].play()
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed")
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed")
  }, 100)
}

function checkAnswer(currentIndex) {
  if (gamePattern[currentIndex] != userClickedPattern[currentIndex]) {
    playSound("wrong")
    $("#level-title").text("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over")
    setTimeout(function () {
      $("body").removeClass("game-over")
    }, 200)
    return restart()
  }

  if (gamePattern.length == userClickedPattern.length) {
    setTimeout(function () {
      userClickedPattern = []
      nextSequence()
    }, 1000)
  }
}

function restart() {
  level = 0
  gamePattern = []
  userClickedPattern = []
}
