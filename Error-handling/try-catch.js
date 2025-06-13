// try{
//     // whatever you want to write code which is going to execute.that will be here
//       let name = "sween"
//       console.log(name, age)
// }catch(error){
//     // if above task is giving any sort of  error that will be handle here
//     console.log(error.message)
// }

// let name = "sween"
// console.log(name, age)

let allInput = document.querySelectorAll("input")
let btn = document.querySelector("button")
let resultEle = document.querySelector("p")

// you can create your own error

function divide(a,b){
    if(Number(b) === 0)throw new Error("cannot divide by zero, please write some another number")
        
        return a / b
    
}

btn.addEventListener("click",()=>{

try{
    let firstValue = allInput[0].value
    let secondValue = allInput[1].value

    resultEle.innerText = `Result: ${divide(firstValue,secondValue)})`
    resultEle.style.color = "black"

}catch(err){

// console.log(err.messaage)

resultEle.innerText = `Error:${err}`
resultEle.style.color = "red"
console.log(err)
}
    
})