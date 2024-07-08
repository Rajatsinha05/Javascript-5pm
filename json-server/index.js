import { createProduct, DeleteProduct, getProducts, updateProduct } from "./api/product.api.js";


let id = -1

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value
    }

    if (id == -1) {
        createProduct(product)
    }
    else {
        updateProduct(id, product)
    }

}

document.getElementById("productData").addEventListener("submit", handleData)

// update the product

const Handleupdate = (ele) => {
    document.getElementById('title').value = ele.title
    document.getElementById('price').value = ele.price
    document.getElementById('img').value = ele.img
    document.getElementById("submit").value="Update"

    id = ele.id
}
// mapper

const Mapper = (data) => {

    data.map((ele) => {
        let title = document.createElement('h3');
        title.innerHTML = ele.title
        let price = document.createElement('h5');
        price.innerHTML = ele.price
        let img = document.createElement('img');
        img.src = ele.img
        let update = document.createElement('button');
        update.innerHTML = "Update"
        update.addEventListener("click", () => Handleupdate(ele))
        let deleteProduct = document.createElement("button")
        deleteProduct.innerHTML = "Delete"

        deleteProduct.addEventListener("click", () => {
            DeleteProduct(ele.id)
        })
        let div = document.createElement('div');

        div.append(img, title, price, deleteProduct, update)

        document.getElementById("productList").append(div)
    })


}


let data = await getProducts()
Mapper(data)
