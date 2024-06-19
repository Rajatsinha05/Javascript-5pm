import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

const handleData = (e) => {
    e.preventDefault();
    
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password"),
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
    window.location.href="/project/index.html"

}

document.getElementById("userData").addEventListener("submit", handleData)