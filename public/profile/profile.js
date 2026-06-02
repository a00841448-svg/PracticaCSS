window.onload = () => {
    const name = document.getElementById("name")
    name.innerText = sessionStorage.getItem("name")
}