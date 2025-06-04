let age = 45;
if(age > 60){
    console.log("No you are above 60")
}else if(age > 18){
    console.log("yes you are eligible")
}else{
    console.log("no you are not elegable for the driving license");
}

let day = "saturday";
switch(day){
    case "sunday":
        console.log("yes its sunday")
        break;

    case "monday":
        console.log("oh its monday")
        break;  
     
    case "tuesday":
        console.log("oh its") 
        
     default:
        console.log("any day")   
}

let age2 = 19 
let message =    age2 > 18    ? "yes you are elegible"    : "sorry you are not elegible" 


let number = 10
let message2 =    (number > 20)  ?  "yes its greater than 20"  :  "its lower than 20"


console.log(message)