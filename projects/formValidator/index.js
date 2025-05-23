let firstNameInput = document.querySelector("#firstName")
let lastNameInput = document.querySelector("#lastName")
let mobileInput = document.querySelector("#mobile")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let submitBtn = document.querySelector(".submit")
let showPassword = document.querySelector(".showPassword")
let allInputs = document.querySelectorAll("input")
 

// Regex
let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\w_]).{8,}$/

submitBtn.addEventListener('click',(e)=>{
     e.preventDefault();     //it will stop the default behaviour of submit event.which is refresh the page

    // errorMassage.textContent=""

     if(firstNameInput.value.length <= 3){
        document.querySelector("#firstNameError").textContent = "write a valid Firstname"  
        return
     }

     if(lastNameInput.value === ""){
         document.querySelector("#lastNameError").textContent = "Lastname is required"   
         return
    }
     
    if(emailInput.value === ""){
         document.querySelector("#emailError").textContent = "Email is required"   
         return
    }
    
    if(mobileInput.value.length < 10 || mobileInput.value.length > 10){
        document.querySelector("#mobileError").textContent = "Mobile number should be 10 digit"  
        return
    }

    if(!pattern.test(passwordInput.value)){
          document.querySelector("#passwordError").textContent = "password should include one upperCase letter,one lowerCase,one special character.minimum 8 letter"    
        return
    }

    console.log("your form has been submitted")
    // firstNameInput.value = ""
    // lastNameInput.value = ""
    // emailInput.value = ""
    // mobileInput.value = ""
    // passwordInput.value = ""
     
    allInputs.forEach((input) => {
          input.value = ""
    })
})

//live clearing error from error div
allInputs.forEach((inputs) => {
  inputs.addEventListener("input",(e) => {
       e.target.nextElementSibling.textContent = ""
  })
})

showPassword.addEventListener("click",(e) => {
   e.preventDefault() 
   passwordInput.type = (passwordInput.type === "password") ? "text" : "password"
})