 // let date = new Date()
function add(a,b){
    let result =  a + b
    return result
}
console.log(add(2,3))

 

//promiseOne
let promiseOne = new Promise((resolve,reject)=>{
        for(let i=1;i<=10;i++){
            console.log("hello and how are you")
            resolve()     
        }
})

//promise consumtion
promiseOne.then(()=>{
    console.log("promise has been consumed")
})

// promiseTwo

new Promise((resolve,reject)=>{
     setTimeout(()=>{
          console.log("Promise two is completed")
          resolve()
     },1000)
}).then(()=>{
     console.log("promise two has been consumed")
})

// promise three
let promiseThree = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve({username: "rahul",email:"rahul@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
      console.log(user)
       
})

let promisFour = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let pass = true;
        if(!pass){
            resolve({grade:"A: user has successfully pass"})
        }else{
            reject({grade:"Fail"})
        }
     },1000)
})

promisFour.then((result)=>{
     console.log(result)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("finally you promise either resolve or rejected")
})

// 5.promise five
 let promiseFive = new Promise((resolve,reject)=>{

    setTimeout(() => {
        let condition = false
        if(condition){     //condition === true; and (condition) both are same and (condition === false) and (!condition) both are same
            resolve({username: "chanchal", age:45})
        }else{
            reject({message: "you promise has been rejected"})
        }
    }, 1000);
})
// promiseFive.then((result)=>{
//    console.log(result.username)
// }).catch((err)=>{
//     console.log(err)
// })

//promise consumetion new way

// async await

 async function promiseWithAsync(params) {
    try{
        let result = await promiseFive
         console.log(result) 
    }catch(err){
        console.log(err)
    }
}
promiseWithAsync()  

// syntaxOf try catch

// try{

// }catch(err){
    //   console.log(err)
// }