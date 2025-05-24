// The Promise object represents the eventual completion (or failure) of
// an asynchronous operation and its resulting value.


// API : application programming interface

// Promise
// let date = new Date()


// promise creating
 let promisOne = new Promise((resolve,reject) => {
    //  do an async task
    // DB calls,cryptography,network

    setTimeout(() => {
        console.log("Async task is complete")
        resolve()                //we are calling resolve then promise has been consumed
    },1000)
 })

//  promise consumtion
promisOne.then(() => {
    console.log("promise has been consumed")
})
 
// 2.Promise two
new Promise((resolve,reject) => {

    setTimeout(() =>{
        console.log("promise two is completed")
        resolve()
    },1000)
}).then(() => {
    console.log("promise two has been consumed")
})

// promise three
// let promisThree = new Promise((resolve,reject) => {
//      setTimeout(()=>{
//         resolve("chanchal")
//      },1000)
// })

// promisThree.then((user)=>{
//     console.log(user)
// })

// promise three
let promisThree = new Promise((resolve,reject) => {
     setTimeout(()=>{
        resolve({username: "chanchal", email: "chanchal695@gmail.com"})
     },1000)
})

promisThree.then((user)=>{
    console.log(user)
})

// 4.promise four

let promiseFour = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let pass = false
        if(!pass){
            resolve({grade: "A: user has successfully pass"})
        }else{
            reject({grade: "Fail"})
        }
    },1000)
})

promiseFour.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("finally you promise either resolve or rejected")
})

// 5.promise five
let promiseFive = new Promise((resolve,reject)=>{

    setTimeout(() =>{
        let condition = false
        if(!condition){
            resolve({firstname: "chanchal", lastname: 45})
        }else{
            reject({message: "you promise has been rejected"})
        }
    },1000)
})

// promise consumetion with async function

async function promiseWithAsync() {
    try{
        let result = await promiseFive
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
promiseWithAsync()