const buttons = document.querySelectorAll(".drum")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent)
  })
})

const makeSound = (char) => {}
