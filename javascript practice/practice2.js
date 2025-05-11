let name = ["shalu","meena","kanu"]
let marks=[70,90,80]
let ternary = ("meena"=== name[1]) ? true : false;
console.log(ternary)
let students= [
    {
        name:"rahul",
        age:22,
        marks:95
    },
    {
        name: "ajay",
        age:23,
        marks:90
    },
    {
        name: "chanchal",
        age :24,
        marks: 85
    }
]
let result = students.filter((student)=>{
       return student.name === "chanchal"
 })
 console.log(result)