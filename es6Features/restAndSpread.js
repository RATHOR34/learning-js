// rest and spread operator
// let name = "sween"
// let name2 = name;
// console.log(name)
let firstname = "rahul"
let lastName = "kumar"
let  name = firstname
name = "rakesh"
console.log(name,firstname);   //so primitive values takes a reference from old variables

let profile = {
    name: "sween",
    age:23,
    email: "chanchal695@gmail.com",
    address: {
        curr: "b-12,1st avenue",
        per: "b-13,2nd avenue"
     }
}

let profile2 = profile
    profile2.age = 26        //it will change the value of both object. means it will original values

// console.log(profile)

let profile3 = profile + profile2
console.log(profile3)

let number = [2,4,6,8]
let arr1 = [100,200,300]
let arr2 =  number
// arr2.push(10)     //it will change also first array's value
//   console.log(number)

let arr3 = [...number,10,20,30] //spread operator   //it takes the values from existing array
let mergingArray = [...arr1,...arr2]  //merging Array
// console.log(mergingArray)
// console.log(arr3)
// console.log(number)
 
let newProfile = {
    ...profile,
    mobile: 3220322290
}

console.log(newProfile)

// rest operator in js
 
//it will take your all arguments in one parameter only 
function printName(...b){
 console.log(b)
}

printName("neha","meena","shanu","kanu")
