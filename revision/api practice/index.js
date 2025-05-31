// API:application programming interface

fetch("https://randomuser.me/api/?results=2")
.then((data)=>{
   return data.json()
}).then((response)=>{
    console.log(response.results)
})