// console.log("one")
//  let greet;
//  console.log(greet)
//  console.log("how are you")
//  console.log("rakesh")
// setTimeout(() => {
//     console.log("two")  //nonblocking code(asyncronous programming)
// },10000)
// for(let i = 0; i < 100; i++){
//     console.log(i)            //blocking code(syncronous programming)
// }

// console.log("three")
// console.log("four")

//  note: bydefault javascript is syncronus programming language
// it's a single thread language
//  syncronous (blocking code)       asyncronus(non blocking code)
                                    //    setInterval,setTimeout
                                    //    dom api
                                    //    fetch
  function one(){
    two()
    console.log("one")
  }   
  
  function three(){ 
    console.log("three")
  }
  
  function two(){
    three()
     console.log("two")
  }


  console.log(three())

