let number = [1,2,3,5,10,20,50]
let names = ["rahul","ajay","ravi","rakesh"]

//method of an array map(),filter(),reduce()
//array.map(() => {})
//key point:
// 1.it will return a new array
// 2.it will not change your original array
let print=names.map((name,index)=>{
    return name+"singh"
})
console.log(print)

//array.filter(() => {})
    // key:
    // 1.it will return you a new array
let number2 = number.filter((num,i) => {
    return num>5
})    
console.log(number2)

let filterArray = number.filter((coin) => { return coin < 50}) 
console.log(filterArray)

// array.reduce(()=>{},initialvalue)
// it will give return you a number

let reducer = number.reduce((accum,current) => {
    return current += accum
},100)
console.log(reducer)

//forEach(() => {})
//  it works like your for loop,but it will not give you any return

names.forEach((name,index) => {
    console.log(name,"kumar")
})
 let totalnumber = 0
 for(let i=0; i<number.length;i++){
    totalnumber += number[i]
 }
 console.log(totalnumber)
