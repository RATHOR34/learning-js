console.log(lastName)   //you will get undefine

var name = "chanchal"
 var lastName = "Rathor"

//note: it will give you an error 
// console.log(age) 

let age = 23
let mobile = 4885885
const email = "chanchal789@gmail.com"



// -------------------------------2nd exercise-----------------------

phone = 13747477474;
// console.log(phone)
var phone;

// phone2 = 58588585
// console.log(phone2)                   //you will get an error at this stage, bacause you are initialaizing let variable
                                     // after assigning the let variable                
// let phone2;


// -----------------------------exercise three with function hoisting------------------------------
// console.log(greet())
//  function declaration is the only function which is getting hoisted in global execution context

function greet(){
    let output = 2+2
    return `welcome to our website. output of two plus two = ${output}`
}


// NOTE: you will get an error
// console.log(greet2())


let greet2 = () =>{
    return "welcome to our website"
}

// function in javascript
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls

// A. function declartion                    its work on hoisting
// console.log(sum(7, 9))
function sum(a, b){
   return a + b
}
 
// B. function expression
let expressionFun = function(a,b){
    return a + b
}

console.log(expressionFun(4, 15))


// C.ARROW FUNCTION
let arrowFunction = (a,b) =>{
    console.log(a+b)
}

arrowFunction(10,20)


// RETURN IN Function
function mul(a,b){
    console.log("hi welcome")
    let result = a * b;
    let message = `your two digit multiplication result is = ${result}`
    
    return message
}

console.log(mul(100,35))