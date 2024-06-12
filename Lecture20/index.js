
const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: document.getElementById('username').value,
        number: document.getElementById('number').value,
        age: document.getElementById('age').value,
        password: document.getElementById('password').value
    }
    const validUsername = /^[0-9A-Za-z]{6,10}$/;
    let flag = false;
    if (validUsername.test(user.username)) {
        document.getElementById('username').style.border = '1px solid green'
    }
    else {
        document.getElementById('username').style.border = '1px solid red'
        flag = true;
    }
    const isStrongPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
    if (isStrongPassword.test(user.password)) {
        document.getElementById('password').style.border = '1px solid green'
    }
    else {
        document.getElementById('password').style.border = '1px solid red'
        flag = true;
    }
    const isValidNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
    if (isValidNumber.test(user.number)) {
        document.getElementById('number').style.border = '1px solid green'
    }
    else {
        document.getElementById('number').style.border = '1px solid red'
        flag = true;
    }
    if (flag) {
        return
    }
    console.log(user);
}

document.querySelector("#data").addEventListener("submit", handleData)
const handleValidation = (isValid, id, idx, eMsg, sMsg) => {
    let value = document.getElementById(id).value
    let input = document.getElementById(id)
    input.classList.add("input")
    if (isValid.test(value)) {
        document.getElementById(id).style.border = '2px solid green'
        document.getElementById(idx).innerHTML = sMsg
    }
    else {
        document.getElementById(id).style.border = '2px solid red'
        document.getElementById(idx).innerHTML = eMsg
    }
}

const isValidNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
const validUsername = /^[0-9A-Za-z]{6,10}$/;
document.getElementById("username").addEventListener("input", ()=>{
    handleValidation(validUsername,"username","u-msg","username not valid","valid username")
})
document.getElementById("number").addEventListener("input", ()=>{

    handleValidation(isValidNumber,"number","n-msg","number not valid","valid  number")
})

