// שינוי סטייל לאלמנט

const myH1 = document.querySelector("h1")

// שינוי סטייל לאלמנט
myH1.style.textAlign = "center"

// הוספת קלאס לאלמנט

// הוספת קלאס
myH1.classList.add("red")

// הסרת קלאס
myH1.classList.remove("red")

// גישה לאריביוט
document.querySelector("ul li a").getAttribute("href")

// שינוי אטריביוט
document.querySelector("a").setAttribute("href", "https://youtube.com")
document.querySelector("a").setAttribute("target", "_blank")

// להוסיף במידה ואין-למחוק במידה ויש
myH1.classList.toggle("red")
// להוסיף קלאס שנותן בקגראונד כחול ב סיאסאס ולהוסיף אותו לכותר מה גאווה סקריפט
