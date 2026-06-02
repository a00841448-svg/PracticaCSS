console.log("Hola mundo")
// alert("hola")
// confirm("deseas salir?")

const username = document.getElementById("username")
const password = document.getElementById("passowrd")
const btn_login = document.getElementById("login")

const API_URL = "http://localhost:8000"

const login1 = async () => {
    const user = {username:username.value,password:password.value}
    const res = await fetch(API_URL+"/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    })
    const data = await res.json()
    if(data.login === true){
        sessionStorage.setItem("id",data.user.id)
        sessionStorage.name = data.user.name
        window.location = `/profile/index.html?id=${data.user.id}`
    }else{
        alert("Credenciales incorrecto")
    }
}
btn_login.addEventListener("click", login1)