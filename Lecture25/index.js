let products = JSON.parse(localStorage.getItem('products')) || [];


const deleteProduct = (idx) => {
   products.splice(idx, 1);
   uiMaker()
   localStorage.setItem("products", JSON.stringify(products));
}
const uiMaker = () => {
    document.getElementById("products").innerHTML = ""
    products.map((ele, index) => {
        let title = document.createElement('h1');
        title.innerHTML = ele.title;
        let btn = document.createElement('button');
        btn.innerHTML = "Delete"
        btn.addEventListener('click', () => deleteProduct(index));
        let div = document.createElement('div');
        div.append(title, btn);
        document.getElementById("products").append(div);
    })
}
uiMaker();