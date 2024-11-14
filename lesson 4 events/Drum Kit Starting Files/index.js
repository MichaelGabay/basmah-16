// קבלת כל הכפתורים כמערך
const buttons = document.querySelectorAll(".drum")

const sounds = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3",
}

// פונקציה שמקבלת תו ויודעת להשמיע סאונד לפי סוג התו
function playSound(char) {
  const audio = new Audio(sounds[char] ?? "sounds/fail.mp3")
  audio.play()
}

// מעבר על כל הכפתורים והצמדת האזנה שמפעילה את הפונקציה דלעיל
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // הוספת קלאס
    buttons[i].classList.add("clicked")
    // מסיר את הקלאס לאחר השהייה של 300 מילי סקנד
    setTimeout(function () {
      buttons[i].classList.remove("clicked")
    }, 300)
    playSound(buttons[i].textContent)
  })
}

// האזנה ללחיצה על המקלדת, וקריאה לפונקציה עם התו הנלחץ
addEventListener("keydown", function (e) {
  playSound(e.key)
})
