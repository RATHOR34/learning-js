let input = document.querySelector("input")
let saveBtn = document.querySelector("button")
let ul = document.querySelector("ul")
let num = 0;

saveBtn.addEventListener("click", () => {
   
    if(input.value.trim() === ""){
        alert("Enter the value in input")
        return
    }
   
      
    let li = document.createElement("li")
     num++
    
     li.innerHTML = `${num}. ${input.value} <button class="delete">Delete</button`
     
     ul.append(li)
     
     input.value = ""
     
     li.lastElementChild.addEventListener("click", ()=>{
     li.remove()
     
     let count = document.querySelectorAll("li")
     
     if(count.length === 0){
        num = 0
     }

     })

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