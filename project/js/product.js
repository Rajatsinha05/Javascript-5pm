import { createTag } from "../components/helper.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let products = JSON.parse(localStorage.getItem("products")) || [];

const Mapper = (data) => {
    document.getElementById("productList").innerHTML = "";
    data.map((item) => {
        let img = createTag("img", item.img);
        let title = createTag("h4", item.title);
        let price = createTag("p", item.price);
        let category = createTag("p", item.category);
        let div = document.createElement("div");
        let btn = createTag("button", "Buy");
        div.append(img, title, price, category, btn);
        document.getElementById("productList").append(div);
    });
};

Mapper(products);

const handleSort = (sort) => {
    if (sort == "lth") {
        let temp = products.sort((a, b) => a.price - b.price);

        Mapper(temp);
    } else {
        let temp = products.sort((a, b) => b.price - a.price);
        Mapper(temp);
    }
};




const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category)
    Mapper(temp);
}

document
    .getElementById("lth")
    .addEventListener("click", () => handleSort("lth"));
document
    .getElementById("htl")
    .addEventListener("click", () => handleSort("htl"));
document
    .getElementById("men")
    .addEventListener("click", () => handleCategory("men"));

document
    .getElementById("women")
    .addEventListener("click", () => handleCategory("women"));

document
    .getElementById("kids")
    .addEventListener("click", () => handleCategory("kids"));