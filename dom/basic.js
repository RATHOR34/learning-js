// ----------accessing property for document-------------------
// let heading = document.getElementById("first-heading");  //access by id
// console.log(heading)
// let heading1 = document.getElementsByTagName("h1")[0]    //access by tagname
// console.log(heading1)
// let heading2 = document.getElementsByClassName("list")[0]
// console.log(heading2) 

let title = document.querySelector("h2")
console.log(title)

let title2 = document.querySelector(".heading")
console.log(title2)

let title3 = document.querySelector("#first-heading")
console.log(title3)

let list = document.querySelectorAll(".list")
console.log(list)

let para = document.querySelector(".paragraph")
console.log(para)

let input = document.querySelector("input[type='password']")
console.log(input);

input.style.padding = "5px"
// innerHTML,innerText, textContent
console.log(para.innerHTML)               //text and if tag is available that will also come
console.log(para.innerText)               //only you will get the text content
console.log(para.textContent)             //you will get all the context, does'nt matter if its not visible