import getValue, { createTag } from "../components/helper.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let products = JSON.parse(localStorage.getItem("products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || []

 document.getElementById("count").innerHTML=cart.length
 
const isExists = (id) => {
    let temp = cart.filter((ele) => ele.id == id)
    return temp.length > 0 ? true : false
}
const handleCart = (ele) => {
    if (isExists(ele.id)) {
        cart.map((item, index) => {
            if (item.id == ele.id) {
                cart[index].qty += 1

            }
        })
        alert("qty added to cart")
    }
    else {
        // ele.qty=1
        cart.push({ ...ele, qty: 1 })
        // cart.push(ele)
        alert("added  to the cart")
        document.getElementById("count").innerHTML=cart.length
    }

    localStorage.setItem("cart", JSON.stringify(cart))

}


const Mapper = (data) => {
    document.getElementById("productList").innerHTML = "";
    data.map((item) => {
        let img = createTag("img", item.img);
        let title = createTag("h4", item.title);
        let price = createTag("p", item.price);
        let category = createTag("p", item.category);
        let div = document.createElement("div");
        let btn = createTag("button", "Buy");
        btn.addEventListener("click", () => handleCart(item));
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


// search  for products

const handleSearch = (value) => {
    let temp = products.filter((ele) => ele.title.includes(value));
    Mapper(temp);
}
const handleSearchData = (e) => {
    e.preventDefault();
    let searchValue = getValue("searchValue");
    handleSearch(searchValue)

}


// keypress events
const handleKeypress = (e) => {
    //  enter keypress
    //    if(e.key=="Enter") {
    //     let searchValue = getValue("searchValue");
    //     handleSearch(searchValue)
    //    }
    //    live keypress events
    let searchValue = getValue("searchValue");
    handleSearch(searchValue)
}

// enter 
document.getElementById("searchValue").addEventListener("keypress", handleKeypress)

document.getElementById("search").addEventListener("submit", handleSearchData)


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