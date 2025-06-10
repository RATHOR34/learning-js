//note : when you are crating a function, then you can give parameters
function add(a,b){
    return a + b
} 

//note: when you are executing the function, you may have give argument
add(4,5)          

//-----------------------------default parameter-----------------------------------
function sum(a = 5,b = 10){ 
    return a + b
}
// console.log(sum(30,20))

 let result = sum(20, 90) 
 console.log("last one" ,result)

