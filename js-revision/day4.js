// loop in js
// note: javascript loops are control structures that allow you to execute a block of code repetedly.

// for loop
// syntax: for(initialization,condition,inc/dec){
//   code for execution
// }

for(let i = 50; i<100; i+=2){
    console.log(i)
}

for(let i = 2; i <= 20;  i+=2){
    console.log(i)
}

let students = [{
    name: "anil",
    age: 22,
    score: 87
},
{
    name:"vasu",
    age: 22,
    score: 97
},
{
    name: "rahul",
    age: 22,
    score: 77
},
{
    name: "kanha",
    age: 21,
    score:100
},
{
    name: "kanha",
    age: 23,
    score: 98
}
]
 for(let i = 0; i < students.length; i++){
    if(students[i].age == 21 || students[i].score > 90 && students[i].name === "kanha"){
        console.log(`age: ${students[i].age}`)
        console.log(`score: ${students[i].score}`)
        console.log(`name: ${students[i].name}`)
    }
 }

 //filtering data with score
for(let i = 0; i < students.length ; i++ ){

    if( students[i].score > 90) {  
        console.log(students[i].name)
        console.log("Score :", students[i].score)
        console.log("Grade A+")
    }
}
