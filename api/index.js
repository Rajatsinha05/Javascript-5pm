
const Mapper = (data) => {
    console.log(data);
}




const getData = async () => {

    let req = await fetch("https://fakestoreapi.com/products")
    let res = await req.json()
    Mapper(res)
}

getData()


// const getData = () => {

//     fetch("https://fakestoreapi.com/products")
//         .then((req) => req.json())
//         .then((res) => {
//             console.log(res);
//         })
// }