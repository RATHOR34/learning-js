// what is callback?
// A callback is a function passed as an argument function.
// It is called after the first function finishes its task.


// why use callbacks?
// To handle asynchronous operations,like:


// API requests
// Reading files
// Timers (setTimeout,setInterval)


// basic callback

function greet(name,cb){
console.log(`hello ${name},welcome to our shop`)
cb()
}

function goodBye(){
    console.log("goodBye")
}

greet("chanchal",goodBye)

function sum(a,b,callback){
    console.log("your sum is", a + b)
    callback()
}

function done(){
    console.log("your task has been completed")
}
sum(5,30,done)

// ------------------------------callback with async task(setTimeout)-----------------------------------
  
setTimeout(() => {
    console.log("set timeout is working")
}, 2000);

                  //or
function greet1(){
    console.log("hi welcome to our website")
}  

setTimeout(greet1,2000)
