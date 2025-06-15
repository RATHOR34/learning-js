// intermediate level questions------------------------------
// write a program that prints the numbers from 1 to n specified number.However,for multiples of 3, print "Fizz"
// instead of the number. for multiples of 5, print "Buzz" instead of the number. For multiples of 5.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// 1.fizzbuzz
// function fizzbuzz(num){
 
//     for(let i = 0; i < 50; i++){
    
//         if(i % 3 === 0 && i % 5 ===0){
//              console.log("fizzBuzz")

//     }else if(i % 5 === 0){
//              console.log("buzz")

//     }else if(i % 3 === 0){
//               console.log("fizz")

//     }else{
//            console.log(i)
//     }
    
//     }
// }
 
// fizzbuzz(50)

// 2.count vowels-------------------------

function countVowels(str){
    let vowels = ["a","e","i","o","u"]
    let count = 0
   
    for(let i = 0; i < str.length; i++){
         
        if(vowels.includes(str[i])){
            count++
        }

    }
    return count
}
// console.log(countVowels("aeiou"))

// 3.remove duplicate from array----------------
let arr = [5,6,5,6,77,88,4,0,4,3,11,22,0,0]

function removeDuplicate(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        
        if(!result.includes(arr[i])){
             result.push(arr[i])
        }
    }
    return result
}

// console.log(removeDuplicate(arr))

// 4.count each different value from array--------------------------------------

let array = [11,11,10,10]

function countEachvalue(array){
    let result = {}
     
    for(let i = 0; i < array.length; i++){
        if(result[array[i]] === undefined){

            result[array[i]] = 1
        }else{

            ++result[array[i]]
        }
        
    }
     return result
}

console.log(countEachvalue(array))