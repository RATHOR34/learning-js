let slider = document.querySelector(".images")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let allImages = document.querySelectorAll("img")

let currentPx = 0;
next.addEventListener("click",() => {
    
     if(currentPx === (allImages.length-1) * 400){
        currentPx = 0
        slider.style.left = `-${currentPx}px`
        alert("hello this is last image")
        return
     }
   
     currentPx += 400
     slider.style.left = `-${currentPx}px`
     console.log(currentPx)
     
})
  
prev.addEventListener("click",() => {
    if(currentPx === 0){
        alert("this is the first image")
        // 
    }else{
        currentPx -=400
        slider.style.left = `-${currentPx}px`
        console.log(currentPx)
    }
    
})