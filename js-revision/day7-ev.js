// what is callback
// note: callback is a function,which passes to another function as an argument.

function add() {
    console.log("hi i will add the two numbers")
}

function greet(callback) {
    console.log("welcome to our website")
    callback()
}

greet(add)


// ------------------------setInterval and settimeout------------------

console.log("hii")

let count = 0
let statement = setInterval(() => {

    let date = new Date()
    console.log("hello", date.toLocaleTimeString())
    // count++
    // if(count === 10){
    //       clearInterval(statement)
    // }
}, 1);

 

let set = setTimeout(() => {

    let date = new Date()
    console.log("hn",date.toLocaleTimeString())

}, 2000);

// clearTimeout(set)
// console.log("hello")


// let count = 0

// let intervalId = setInterval(() => {

//       let date = new Date()
//       console.log(date.toLocaleTimeString())

//       count++
//       console.log(count)

//       if(count === 20){

//         clearInterval(intervalId)

//       }

// },1000)