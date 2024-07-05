import { createProduct, getProducts } from "./api/product.api.js";

const handleData = (e) => {
    e.preventDefault();
     let product={
        title:document.getElementById('title').value,
        price:document.getElementById('price').value,
        img:document.getElementById('img').value
     }
    createProduct(product)

}

document.getElementById("productData").addEventListener("submit", handleData)

getProducts()