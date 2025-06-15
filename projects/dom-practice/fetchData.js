let nameElement = document.querySelector("#name")
let fnameElement = document.querySelector("#fname")
let mnameElement = document.querySelector("#mname")
let dobElement = document.querySelector("#dob")
let rollNoElement = document.querySelector("#rollNo")
let htmlElement = document.querySelector("#htmlMarks")
let cssElement = document.querySelector("#cssMarks")
let jsElement = document.querySelector("#jsMarks")
let reactElement = document.querySelector("#reactMarks")
let nodeElement = document.querySelector("#nodeMarks")
let totalMarks = document.querySelector("#totalMarks")
let resultpara = document.querySelector("h2")
let notFound = document.querySelector(".notFound")
let btn = document.querySelector("button")
let table = document.querySelector("table")

let array = [{
    name: "Ajay",
    fname: "Ramesh Sharma",
    mname: "Seeta Sharma",
    dob: "12-03-2003",
    roll: 10,
    htmlScore: 100,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Chetan",
    fname: "Rahul Sharma",
    mname: "Meena Sharma",
    dob: "19-03-2003",
    roll: 20,
    htmlScore: 50,
    cssScore: 90,
    jsScore: 70,
    nodeScore: 70,
    reactScore: 90
},
{
    name: "Chanchal",
    fname: "Mangal Rathor",
    mname: "Dheeraj Rathor",
    dob: "12-02-2006",
    roll: 30,
    htmlScore: 40,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Anil",
    fname: "Mohan sharma",
    mname: "Meena Sharma",
    dob: "13-02-2003",
    roll: 40,
    htmlScore: 100,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Vasu",
    fname: "Jyoti Sharma",
    mname: "Meena Sharma",
    dob: "15-01-2003",
    roll: 50,
    htmlScore: 100,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Kanha",
    fname: "Jagdish Sharma",
    mname: "Geeta Sharma",
    dob: "17-05-2007",
    roll: 60,
    htmlScore: 100,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Aakash",
    fname: "Kunal pareek",
    mname: "manju pareek",
    dob: "20-06-2004",
    roll: 70,
    htmlScore: 100,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Aakash",
    fname: "Deepak pareek",
    mname: "Sanju pareek",
    dob: "25-02-2002",
    roll: 80, htmlScore: 100,
    cssScore: 90,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Sagar",
    fname: "Karan sharma",
    mname: "Geeta sharma",
    dob: "19-02-2008",
    roll: 90,
    htmlScore: 75,
    cssScore: 60,
    jsScore: 100,
    nodeScore: 70,
    reactScore: 100
},
{
    name: "Rahul",
    fname: "Kunal pareek",
    mname: "manju pareek",
    dob: "12-02-2006",
    roll: 100,
    htmlScore: 80,
    cssScore: 90,
    jsScore: 80,
    nodeScore: 90,
    reactScore: 100
}
]


function fetchData() {
    let fetchName = document.querySelector("input")


    for (let i = 0; i < array.length; i++) {

        if (array[i].name == fetchName.value) {

            nameElement.textContent = array[i].name
            fnameElement.textContent = array[i].fname
            mnameElement.textContent = array[i].mname
            dobElement.textContent = array[i].dob
            rollNoElement.textContent = array[i].roll
            htmlElement.textContent = array[i].htmlScore
            cssElement.textContent = array[i].cssScore
            jsElement.textContent = array[i].jsScore
            nodeElement.textContent = array[i].nodeScore
            reactElement.textContent = array[i].reactScore
            totalMarks.textContent = array[i].htmlScore+array[i].cssScore+array[i].jsScore+array[i].nodeScore+array[i].reactScore
            btn.style.display = "none"
            table.style.display = "table"
            notFound.style.display = "none"
            fetchName.style.display = "none"
            resultpara.style.display = "none"

        }else{
            
            notFound.textContent = "Name is not Found !"
            
        }
    }
}