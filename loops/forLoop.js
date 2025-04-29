// for loop in javascript
// for(initialization; condition;inc/dec){
// code to run each time
// }
//   let count = 1
//   for(let count = 1; count <= 10; count++){
//     console.log(count)
// }

 let number = prompt("give a number,which you want to see the table")
 let stringToNum = Number(number)
 for(let i = 1; i <= 10; i++){
    console.log(`${stringToNum} x ${i} = ${stringToNum * i}`)
 } 

//template literals
let name = "sween khan"
let age = 24
let greet = `hello ${name},welcome to our website because your age is ${age},you are eligible for becoming instructor`
console.log(greet)

// let greetings="How are you"
// for(let i=1;i<=5;i++){
//    console.log(i,greetings)
//}

for(let i = 100; i >= 1; i-- )
{
   console.log(i)
}
