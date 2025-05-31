let button = document.querySelector("button")
let productsElement = document.querySelector(".products")


function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then((data)=>{
       return data.json()
    }).then((response)=>{
        renderingProducts(response)
    }).catch((err)=>{
        console.log(err)
    })
}


function renderingProducts(products){
         products.forEach(product => {
            console.log(product)

         let productDiv = document.createElement("div")
         productDiv.classList.add("product")
         let imageElement = document.createElement("img")
         let imageDiv = document.createElement("div")
         let titleElement = document.createElement("p")
         let priceElement = document.createElement("h5")
         let ratingElement = document.createElement("button")
         let deliveryElement = document.createElement("p")
         let createElement = document.createElement("div")
         
         imageElement.setAttribute('src',product.image)
         titleElement.textContent = product.title.length < 25 ? product.title : product.title.substring(0,25);
         priceElement.textContent = `₹ ${product.price}`
         ratingElement.textContent = `${product.rating.rate} ★`
         ratingElement.classList.add("rating")
         deliveryElement.textContent = `Free Delivery`
         deliveryElement.classList.add("delivery")
         createElement.classList.add("text")
          
         imageDiv.appendChild(imageElement)
         imageDiv.classList.add("imgDiv")
       
          //  productDiv.appendChild(titleElement)
         //  productDiv.appendChild(priceElement)
        //  productDiv.appendChild(ratingElement)

        createElement.appendChild(titleElement)
        createElement.appendChild(priceElement)
        createElement.appendChild(ratingElement)
        createElement.appendChild(deliveryElement)
       
        productDiv.appendChild(imageDiv)  
        productDiv.appendChild(createElement)
        productsElement.appendChild(productDiv)
          
         });
}

button.addEventListener('click',fetchData)