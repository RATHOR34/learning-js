//find the biggest and smallest number in array
let number = [10,2,3,4];
 
 
let bignumber = 0;
let smallNumber = number[0]

for(let i = 0; i < number.length; i++){
    if(bignumber < number[i]){
        bignumber = number[i]
    }
    
    if(smallNumber > number[i]){
        smallNumber = number[i]
    }
}
console.log("big Number", bignumber)
console.log("small Number", smallNumber)


// sum of an array
let reduceArray = number.reduce((acc,curr) => curr += acc)
console.log(reduceArray);

//sorting an array
let sortingArray = number.sort((a, b) => a - b)     //sorting an array form of ascending    
// let sortingArr = coins.sort((a, b) => b - a)     //sorting an array form of descending
console.log(sortingArray)
console.log(sortingArray[0])

// reverse()
console.log(sortingArray.reverse());

let numberNotes = [2,5,500,4000,20,40,50,[100,200,300,1000,[0,2,[5555]]]]
let flating = numberNotes.flat()                    //one level flating Array 
let flating2 = numberNotes.flat(2)                 //two level flatting an array
let infiniteFlatting = numberNotes.flat(Infinity)  //infinite flatting
 
console.log(infiniteFlatting)

let sum = 0;
for (let i=0; i<infiniteFlatting.length;i++){
    sum+=infiniteFlatting[i]
}
console.log("sum of an array", sum)

let result = []
for(let i = 0; i< infiniteFlatting.length; i++){
      if(infiniteFlatting[i] <= 500){
        result.push(infiniteFlatting[i])
      }
   }

   console.log(result)
