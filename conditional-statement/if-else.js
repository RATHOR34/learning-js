//if else statemant in javascript
// syntax :
//if(condition){
//execution code
//} else{
//}

let name = "priya"
let age = 75

if(age >= 18 && age <= 60){
    console.log(name,"Yes, you are eligible for applying driving licence")
}else {
    console.log(name,"No, you are not eligible for applying driving licence")
}
//getting grade in school
let marksOfStudents = 60

if(marksOfStudents >= 90){

    console.log("congarts,you got A+ grade!")

}else if(marksOfStudents >= 80){
   
    console.log("congarts,you got A grade!")

}else if(marksOfStudents >= 70){
     
    console.log("congarts,you got B grade!")

}else if(marksOfStudents>33 && marksOfStudents <=60){
     
    console.log("congarts,you got c grade!")

}else{
     
      console.log("Oops you are fail")
}
 
let userName = prompt("what is your name")
console.log(userName,"welcome to our website")

let promptValue = prompt("what is 2 + 2")
if(promptValue == 4){
    alert("yes you are right")
}else{
    alert("yes you are wrong")
}

let quote = 'welcome our institute';
console.log(quote)
 


