

// function run(callback) {
//     callback("hey hey thhis is a message")
// }

// run(
//     function(msg) {
//         console.log(msg)
//     }
// )


// let arr = [2314, 57, 23, 567, 3, 76, 2, 7, 54, 2];


// דריסה ומימוש שלי לפונקציה פור איצ
// arr.forEach = function (cbf) {
//     for (let i = 0; i < this.length;i++){
//         cbf(arr[i],i,this)
//     }
// }


// arr.forEach(function (num, i) {
//     console.log(i, num)
// })

// מימוש של פונקציה פיינד
// arr.find=function(cbf){
//     for(let i=0;i<this.length;i++){
//         if(cbf(this[i])) return this[i];
//     }
// }

// console.log(arr.find((num)=>num==100))

// מימוש של פונקציית
// arr.filter = function (cbf) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cbf(this[i])) arr.push(this[i])
//     }
//     return arr
// }

// console.log(arr.filter((num) => num!=54)) 


const arr1=[]

for(let i=1;i<=10;i++){
    arr1.push(i);
}
console.log(arr1)


const arr2=arr1.map

