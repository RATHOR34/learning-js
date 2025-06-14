let name = {
    firstName: "chanchal",
    lastName: "Rathor",

    printName: function(city, state){
        console.log(this.firstName + " " + this.lastName,"from " + city + "," + state)
    }
}

// name.printName()
// name.printName("hyderabad","telangana")

// call method. its like borrowin method form other
let name2 = {

    firstName: "ajay",
    lastName: "kumawat",
}

let name3 = {
    firstName: "chanchal",
    lastName: "rathor"
}

// name.printName.call(name2,"jaipur" ,"rajasthan")
// name.printName.apply(name3,["jaipur","rajasthan"])  //if you want to pass multiple argument.it should be an array

let bindName = name.printName.bind(name3,"jaipur","rajasthan")   //it will bind your object with method
bindName()


// ---------------------keeping method outside of the object----------------------------
let profile = {
    firstName: "Rahul",
    lastName: "jat",
    address: "b-12,1st avenue"
}

let greet = function(){
    console.log(`Hello ${this.firstName} ${this.lastName},welcome to our website`)
}

greet.call(profile)
// greet.call(profile2)