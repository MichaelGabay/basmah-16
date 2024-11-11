const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")

const dice1Number = Math.floor(Math.random() * 6) + 1
const dice2Number = Math.floor(Math.random() * 6) + 1

const image1Src = `images/dice${dice1Number}.png`
const image2Src = `images/dice${dice2Number}.png`

image1.setAttribute("src", image1Src)
image2.setAttribute("src", image2Src)

const winnerP = document.querySelector(".theWinner")

if (dice1Number > dice2Number) {
  winnerP.textContent = "🔥player 1 is the winner🔥"
} else if (dice1Number < dice2Number) {
  winnerP.textContent = "🔥player 2 is the winner🔥"
} else {
  winnerP.textContent = "🔥draw🔥"
}
