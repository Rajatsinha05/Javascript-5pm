import getValue from "../components/helper.js";


const handleData = (e) => {
    e.preventDefault();
    
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password"),
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);

}



document.getElementById("userData").addEventListener("submit", handleData)