// A.------------synchronous programming----------------(blocking-code)
// Note: it will finish first task then go for next task.

//console.log("start")

//  example of synchronous programming is :- for loop

// console.log("start")

// for(let i = 0; i < 40; i++){
//     console.log(i)
// }

// console.log("end")

// B.----------------------------asynchronous programming---------------------------------
// Note: it allow us to execute next line.
// setTimeout and setInterval are built in function and that function is part of the browser

console.log("start")

// setTimeout(()=>{
//     console.log("processing")
// },0)

let clear = setInterval(() => {
    console.log("hello")
    clearInterval(clear)
},  1000);

console.log("end")

// what is promises in js?

// the promise object represents the eventual completion(or failure) of an asynchronous operation
// and its resulting value.
// note: promise has three stages("pending","fullfilled","rejected")


// what is api?
// An API(Application programming interface) is a  set of rules and specifications that allows
// different software components or programs to communicate and share data

let data;

fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad &appid=1a4e51c7377e8cf939cbc51bb433a57f")
.then((result) =>{
   return result.json
})
.then((response)=>{
    console.log(response)
    console.log ( Math.round(response.main.temp - 273)) 
})
.catch((err)=>{
     console.log(err)
})

console.log(date)

// let name;
// if(true){
//     name = "sween"
// }
// console.log(name)