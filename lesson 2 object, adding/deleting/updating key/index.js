"use strict"

// function multiple(num1, num2) {
//   return num1 * num2;
// }

// הכפלה בין שתי מספרים
// 50 ,100
// הגרלת מספר רנדומלי
// function random(num1, num2) {
//   const start = Math.min(num1, num2)
//   const end = Math.max(num1, num2)
//   return Math.round(Math.random() * (end - start) + start)
// }

// function randomMultiple(multCallBack) {
//   const a = random(50, 100);
//   const b = random(50, 100);
//   console.log(multCallBack(a, b));
// }

// randomMultiple((num1, num2) => num1 * num2);

// function print(consoleCallBack) {
//   let msg = "hello world"
//   consoleCallBack(msg)
// }

// print(console.log)
// const arr = [20, 25, 42, 19, 10, 34, 28, 26, 23, 28]
// מימוש פונקציית פור איץ
// arr.forEach = function (callBackFunction) {
//   for (let i = 0; i < arr.length; i++) {
//     callBackFunction(arr[i], i)
//   }
// }

// פור איץ רצה על כל תא במערך לפי הסדר ומבצעת -> שימו לב הפעולה לא מחזירה כלום
// arr.forEach(function (num, index) {
//   if (num % 2) {
//     console.log(index, num)
//     arr[index] = 0
//   }
// })

// מימוש לולאת מאפ
// arr.map = function (callBackFunction) {
//   const newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(callBackFunction(arr[i], i))
//   }
//   return newArray
// }

// בלולאת מאפ יש לבצע החזרה של ערך שיכנס למערך החדש שיוחזר מהפעולה
// const newAr = arr.map((number) => number ** 2)

// מימוש פעול פילטר שמחזירה מערך חדש ומסוננן
// arr.filter = function (callBackFunction) {
//   const newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (callBackFunction(arr[i], i)) {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }

// const filterArr = arr.filter(function (value, i) {
//   if (value % 2 == 0) return true
//   return false
// })

// const filterArr = arr.filter((num) => num % 2 == 0)
