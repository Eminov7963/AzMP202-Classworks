import { getAllData } from "./helper.js"; 

const container = document.querySelector(".container");
const input_text = document.querySelector(".input_text")
let produuct_array = null
async function fetchProducts() {
    try {
        const products = await getAllData('products'); 
        produuct_array = products
        Allcards(products); 
    } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error);
    }
}


function Allcards(array) {
    container.innerHTML = ""
    array.forEach(element => {
        container.innerHTML += `
            <div class="box">
                <div class="img">
                    <img src="${element.image}" alt="${element.name}">
                </div>
                <h1>${element.name}</h1>
                <p>${element.description}</p>
                <p>Price: $${element.price}</p>
            </div>
        `;
    });
}


fetchProducts();


input_text.addEventListener("keyup" ,function(event){
    const result = event.target.value.toLowerCase().trim()
    const fultered = produuct_array.filter((item)=>{
        return item.name.toLowerCase().includes(result)
    })
    Allcards(fultered)
    
})
