//forInloop used for object
let profile ={
firstName: "sween",lastName: "khan",age:24}

console.log(profile["age"])

for(let parameter in profile){
    console.log(parameter,":"+profile[parameter])
}
