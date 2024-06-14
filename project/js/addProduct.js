import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";
let isLogin = localStorage.getItem("isLogin") || false;
let userData = JSON.parse(localStorage.getItem("user"))
document.getElementById("navbar").innerHTML = navbar()


if (isLogin) {
    document.getElementById("navbar").innerHTML = navbar("logout", userData.username)
}
else {
    window.location.href = "/project/pages/Login.html"
}

let products = JSON.parse(localStorage.getItem("products")) || []
const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: getValue("title"),
        price: getValue("price"),
        img: getValue("img"),
        category: getValue("category")
    }
    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))
}



document.getElementById("productData").addEventListener("submit", handleData)