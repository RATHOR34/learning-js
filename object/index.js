// object
// in js object are mutable

const profile ={
    firstName: "chanchal",
    lastName: "khan",
    age: 24
}
console.log(profile)
console.log(profile.age)
console.log(profile["firstName"])

profile["age"] =22
console.log(profile)

console.log(Object.keys(profile))  //you will get all the keys in one single array
console.log(Object.values(profile)) //you will get all the values from your array

console.log(Object.entries(profile))  // you will an array inside that array you will see nested array
profile.married = false
console.log(profile)

console.log( delete profile.married)       //you can delete property using delete keyword
console.log(profile)

// for in loop in .. in object

for(let Key in profile){
    console.log(Key)
    console.log(Key+"="+profile[Key])
}