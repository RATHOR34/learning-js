let students = [
    {
        name: "meena",
        age: 22,
        marks: 95, 
    },
    {
        name: "ajay",
        age: 23,
        marks: 90
    },
    {
        name: "neelam",
        age: 24,
        marks: 85
    }

]
let result = students.filter((student, index) => {
      return  student.name === "ajay"
})
 console.log(result)

let result2 = []
for(let i =0; i < students.length; i++){
    if(students[i].marks >= 90){
       result2.push(students[i])
    }
}
  console.log(result2)
