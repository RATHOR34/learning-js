// console.log(this) only work with function expression inside an object
// let profile = {
//     firstName: "kiran",
//     lastName: "kher",
//     age: 66, 

//     fullName: function(){
//          return this.firstName + " "+ this.lastName
//     },
//     about: function(){
//         return `hello i am ${this.firstName}, and i am ${this.age} years old. i want to work with you`
//     }
// }
// console.log(profile.fullName())
// console.log(profile.age)
let profile = {
    firstName: "kiran",
    lastName: "kher",
    age: 66, 
    fullName:function(){
       return this.age
    },
    greet:function(){
        return(`hello ${this.firstName}${this.lastName},welcome to our platform `)
    }
    
}

 console.log(profile.greet())

