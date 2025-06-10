let names = ["chanchal","Meena","dinesh","shalu","chetan","kanaha"]
// push method

// names.push("anil","kanha")
// names.push("Aakash","muskan")

// names.pop()

// names.shift()

// console.log(names)
// names.splice(0,3)
// console.log(names)

// names.unshift("grrty")
// console.log(names)
 

// names.push("anil","kanaha")
// console.log(names)
 
// names.pop()
// console.log(names)

// let take = names.pop()
// console.log(take)

// let takes = names.pop()
// console.log(takes)
// console.log(names)

console.log(names)
let extracingValue = names.splice(1,3)   //it will change your original array

// note starting index and removing count value
console.log(extracingValue)
 
// names.splice(1,3,"kanha")
// console.log(names)
// console.log(names.indexOf("chanchal"))
// names.splice(2, 1, "kanha")
// console.log(names)

// // ------------------------------object revision--------------------------------------------

let profile = {
    name: "sween",
    age: "23",
    mobile: 43434343,
    address: "b-23 1st avenue"
}

// console.log(profile)
// profile.age = 25         
profile.email = "chanchal"


// let profile2 = profile
// profile2.name = "shabir"
// console.log(profile)

// let profile3 = {...profile}
// profile3.name = "lokesh"
// console.log(profile)

// console.log(profile.age)
// console.log(profile["email"])

// ------------------------------loop for object------------------

for (let keys in profile){
    console.log(`${keys}:"${profile[keys]}"`)
}