// closure A closure in javascript is a function that remembers and has access to variables
// from its outer(enclosing) function's scope,even after the outer function has finished executing

let btn = document.querySelector("button")
let resultEle = document.querySelector("p")

function likes(){
    let countingLikes = 0;

    return function incr(){
        countingLikes++
        return countingLikes
    }
}

let likeResult = likes()
btn.addEventListener("click",()=>{
    console.log("likes")
    resultEle.innerText = likeResult()
})

// -------------------------------hoisting concept in js----------------------
// Note: var variable name and function declaration along with data will be hoisted

console.log(address)     //it will give you result undefined
// console.log(add)        //you will get error

let add = "addition"
var address = "Neemuch"   //it will be hoisted

greet()      //it will be hoisted

function greet(){
    console.log("hello and welcome")
}


// ----------------------------------this concepts-------------------------
// this refer to current context. current context can change
console.log(this)

let profile1 = {
    courseFees : 28000,
    courseDuration : "6 months",
    message : function(){
        console.log(`hello ajay your coursefees ${this.courseFees},and your course duration will be ${this.courseDuration}`)
    }
}

profile1.message()