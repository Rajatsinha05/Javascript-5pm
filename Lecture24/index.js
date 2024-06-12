let count1 = localStorage.getItem('count1') || 0;
document.getElementById("count1").innerHTML = count1
let count2 = sessionStorage.getItem('count2') || 0;
document.getElementById("count2").innerHTML = count2
const counter = (id, storage) => {
    let count = 0;
    if (storage == "local") {
        count = localStorage.getItem(id) || 0;
    }
    else {
        count = sessionStorage.getItem(id) || 0;
    }
    count++;
    document.getElementById(id).innerHTML = count
    if (storage == "local") {
        localStorage.setItem(id, count)
    }
    else {
        sessionStorage.setItem(id, count)
    }
    // window.location.reload()
}
// const getValue = (id, storage) => {

//     if (storage == "local") {
//         let count = localStorage.getItem(id) || 0;
//         return count
//     }
//     else {
//         let count = sessionStorage.getItem(id) || 0;
//         return count
//     }

// }
document.getElementById("btn1").addEventListener("click", () => {
    // let count = getValue("count1", "local")
    counter("count1", "local")
})
document.getElementById("btn2").addEventListener("click", () =>
    // let count = getValue("count2", "session")
    counter("count2", "session")
)

