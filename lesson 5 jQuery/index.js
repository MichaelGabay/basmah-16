// הצמדת אירוע לכפתור
$("button").on("click", function () {
  console.log("click")
})

// document.querySelector("button").addEventListener("click", function () {})

const btn = $("button")
btn.css({ background: "blue", paddingTop: "100px" })

btn.addClass("test")
btn.removeClass("test")
