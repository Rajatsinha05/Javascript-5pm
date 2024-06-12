
let products = JSON.parse(localStorage.getItem('products')) || [];
const handleProduct = (e) => {
    e.preventDefault();
    let product = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    window.location.href="/Lecture25/index.html"

}

document.getElementById("addproduct").addEventListener("submit", handleProduct)