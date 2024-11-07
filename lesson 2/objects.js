// יצירת אובייקטשג
const person = {
  name: "Alice",
  age: 28,
  address: "123 Main St, Cityville",
}

// הוספת מפתח
person.status = "single"
// או בצורה הזו
person["status"] = "single"

// מחיקת מפתח
delete person.address
// או בצורה זו
delete person["address"]

// גישה למפתחןת
console.log(person.name)
// או בצורה זו
console.log(person["name"])
