console.log("Hola mundo")
// alert("hola")
// confirm("deseas salir?")

const username = document.getElementById("username")
const password = document.getElementById("passowrd")
const btn_login = document.getElementById("login")


const login1 = () => {
    if(username.value === "root" && password.value === "root"){
        //window.location = "/profile"
        alert("HOLA")
    }else{
        alert("Incorrecto")
    }
}
btn_login.addEventListener("click", login1)