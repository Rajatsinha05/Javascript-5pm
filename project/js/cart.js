import getValue, { createTag } from "../components/helper.js";
import navbar from "../components/navbar.js";
let isLogin = localStorage.getItem("isLogin") || false;
let userData = JSON.parse(localStorage.getItem("user"))
document.getElementById("navbar").innerHTML = navbar()

let cart = JSON.parse(localStorage.getItem("cart")) || []
if (isLogin) {
    document.getElementById("navbar").innerHTML = navbar("logout", userData.username)
}
else {
    window.location.href = "/project/pages/Login.html"
}



const Mapper = (cart) => {
    document.getElementById("list").innerHTML = "Loading..."
    cart.map((item) => {
        let td1 = document.createElement("td")
        let img = createTag("img", item.img)
        td1.append(img)
        let td2 = createTag("td", item.title)
        let td3 = createTag("td", item.category)
        let td4 = createTag("td", item.price)
        let td5 = document.createElement("td")

        let btn1 = createTag("button", "-")
        let btn2 = createTag("button", item.qty)
        let btn3 = createTag("button", "+")
        td5.append(btn1, btn2, btn3)
        let td6 = createTag("td", item.price * item.qty)
        let td7 = document.createElement("td")
        let btn = createTag("button", "remove")
        td7.append(btn)
        let tr = document.createElement("tr")
        tr.append(td1, td2, td3, td4, td5, td6, td7)

        document.getElementById("list").append(tr)

    })
}

Mapper(cart)