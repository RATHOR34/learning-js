let form = document.querySelector("#create-account")
let firstNameInput = document.querySelector("#firstName")
let lastNameInput = document.querySelector("#lastName")
let mobileInput = document.querySelector("#mobile")
let emailInput = document.querySelector("#email")

let getData = document.querySelector(".get-data")
let deleteData = document.querySelector(".delete-data")
// let passwordInput = document.querySelector("#password")
let url = "https://683c672428a0b0f2fdc70fa3.mockapi.io/employe"




function registerAccount(e) {
    e.preventDefault()
    let users = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        mobile: mobileInput.value,
        email: emailInput.value,

    }


    fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(users)
    }
    )
        .then((res) => {
            return res.json()
        })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })

}


// fetchind data with get request
form.addEventListener("submit", registerAccount)
getData.addEventListener("click", () => {
    fetch(url)
        .then(res => res.json())
        .then((response) => {
            console.log(response)
        })
})

//delete request

deleteData.addEventListener("click",()=>{
     fetch("https://683c672428a0b0f2fdc70fa3.mockapi.io/employe/8",{method: "DELETE"})
        .then(res => res.json())
        .then((response) => {
            console.log(response)
        })
})