let input = document.querySelector("input")
let saveBtn = document.querySelector("button")
let ul = document.querySelector("ul")
let num = 1;
saveBtn.addEventListener("click", () => {

    if(input.value.trim() === ""){
        alert("Enter the value in input")
        return
    }
    
    let li = document.createElement("li")
    
     li.innerHTML = `${num}. ${input.value} <button class="delete">Delete</button`
     ul.appendChild(li)
     input.value = ""
     li.firstElementChild.addEventListener("click", ()=>{
        li.remove()
     })
      num++
})

// let lists = []
// saveBtn.addEventListener("click",()=>{
   
//     if(input.value.trim() === ""){
//       alert("please fill out the input")
//       return
//    }

//    lists.push(input.value.trim())
//    createLi()
//    input.value = ""
// })

// function createLi(){
//     ul.innerHTML = ""
//     lists.forEach((list)=>{
    
//     let li = document.createElement("LI")  
//     li.innerHTML = `${list}<button class="delete">delete</button>`
//     ul.appendChild(li)

//     li.firstElementChild.addEventListener("click",(e)=>{
//         li.remove()
//     })
//     })
// }