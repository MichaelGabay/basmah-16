// function add(value, callback) {
//   return callback(value + 5, false)
// }

// function sub(value, callback) {
//   return callback(value - 3, false)
// }

// function mul(value, callback) {
//   return callback(value * 5, false)
// }

// add(5, function (addRes, err) {
//   if (!err) {
//     sub(addRes, function (subRes, err) {
//       if (!err) {
//         mul(subRes, function (mulRes, err) {
//           if (!err) {
//             console.log("Result: " + mulRes)
//           }
//         })
//       }
//     })
//   }
// })

function add(value) {
  return new Promise((resolve) => {
    resolve(value + 5)
  })
}

function sub(value) {
  return new Promise((resolve) => {
    resolve(value - 3)
  })
}

function end(value) {
  return new Promise((resolve, reject) => {
    if (value % 2) {
      return reject("Odd number")
    }
    resolve("Even number all good")
  })
}

// Using the promise-based functions
// add(4)
//   .then((addRes) => sub(addRes))
//   .then((subRes) => end(subRes))
//   .then((resMsg) => {
//     console.log("Result: " + resMsg)
//   })
//   .catch((resMsg) => {
//     console.log("Error: " + resMsg)
//   })

// Using the async/await functions
// async = דרך ליצירת פונקציה שבתוכה נוכל להשתמש במילה "חכה" שתיצור אפקט של המתנה
async function main() {
  try {
    // when on of the promises fails the reject will be called and jump to the catch
    let addRes = await add(5)
    let subRes = await sub(addRes)
    let resMsg = await end(subRes)
    console.log("Result: " + resMsg)
  } catch (error) {
    console.log("Error: " + error)
  }
}

main()

let t = 100
