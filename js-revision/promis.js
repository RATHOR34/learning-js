// The promise object represents the eventual completion(or failure) of
// an synchronous operation and its resulting value.

// API : application programming interface

// Promise

// let date = new Date()
//  let promiseOne = new Promise((resolve,reject)=>{

//     // do an async task
//     // DB calls,cryptography, network

//     setTimeout(() =>{
         
//          console.log("async task is completed")
//         //  resolve({username : "chanchal", email : "chanchal@gmail.com"})
//           resolve()
//     },1000)
//  })

// //  promise consumtion
//  promiseOne.then(()=>{
//     console.log("promise has been consumed")
//  })

//  promiseTwo
// new Promise((resolve,reject)=>{

//           setTimeout(()=>{
//               console.log("promise two")

//           },1000).then(()=>{
//              console.log("promise two has been consumed")
//           })
// })

// 3.promise three

// let promisThree = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
        
//         resolve({username: "chanchal",email: "chanchal695@gmail.com"})

//     },1000)

// })

// promisThree.then((user)=>{
//      console.log(user)
// })

// // 4. promise four
// let promisFour = new Promise((resolve,reject)=>{

//      setTimeout(()=>{
//         let pass = false
//         if(pass){
//             resolve({grade : "A user has successfully pass"})
//         }
//         else{
//             reject({grade : "Fail"})
//         }
//      },1000)
     
// })
// promisFour.then((result)=>{
//        console.log(result)
// }).catch((err)=>{
// console.log(err)
// }).finally(()=>{
//     console.log("finally you get resolve or reject")
// })

// 5.promisefive

new Promise((resolve,reject)=>{

    setTimeout(()=>{
       
       let condition = true
       if(condition){

        resolve({class : "12th",stream : "Science"})
       }else{

        reject("your promise has been reject")
       }

    },1000)

}).then((result)=>{
   console.log(result.class)
}).catch((err)=>{
   console.log(err)
})