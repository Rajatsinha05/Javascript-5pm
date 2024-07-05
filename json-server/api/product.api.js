
export const createProduct = async (product) => {
    let req = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    let res=await req.json()
}


export const getProducts = async ()=>{
    let req = await fetch('http://localhost:3000/products')
    let res = await req.json()
    console.log(res);
}