// console.log(Math.floor(4.10))     //4   //return integer value
// console.log(Math.ceil(4.15))      //5   // it will go up and give you one number above
// console.log(Math.round(4.4))     //5   //it will round your decimal number
// console.log(Math.max(2, 20, 56, 11))   //56  return maximum number
// console.log(Math.min(2, 0, 20, 56, 11)) //return minimum number
// console.log(Math.floor(Math.random()))

function mobileNumberGenrate(){
    let mobileNumber = ""
    
    for(let i = 1; i <= 10; i++){
        // let randomNumber = Math.ceil(Math.random() * 9) 
        // mobileNumber += randomNumber
        mobileNumber += Math.ceil(Math.random() * 9) 
    
        }
    return mobileNumber  
 
}
console.log(mobileNumberGenrate());