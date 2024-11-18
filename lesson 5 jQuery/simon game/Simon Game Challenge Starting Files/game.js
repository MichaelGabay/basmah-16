const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []
const userClickedPattern = []

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4)
  const randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)
  const sound = new Audio("sounds/" + randomChosenColor + ".mp3")
  sound.play()
}

$(".btn").on("click", function () {
  const userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour)
})
