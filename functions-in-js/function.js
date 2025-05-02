// function in javascript
// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).
// console.log(name)
let name = "sween khan"

// A. function declaration
// key: it can be hoisted         console.log(greet())
// return is neccessary 
 
function greeting(){
    return "hello,welcome to our website"
}
console.log(greeting())

// B.function expression
// key: it can't be hoisted.
// better for conditionl scenario .
// return is neccessary 
// work with this keyword 
// console.log(greet2())
let greet2 = function(){
    return "hello, welcome to our website"
}
console.log(greet2)
//c. arrow function
// key: it can't be hoisted.  
// return is not neccessory

let greet3 = (b,a) => { return b/a}
console.log(greet3(2,4))

function add(a,b){
    return a+b
}

let a = 4
let b = 2
console.log(add(a, b))            //aarguments in js, when you are calling the function and sending some values
        
console.log(add(4, 2))  


