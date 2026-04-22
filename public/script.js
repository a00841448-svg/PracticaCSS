const rdInvitado = document.getElementById("invitado")
const rdPonente = document.getElementById("ponente")
const rdSocio = document.getElementById("socio")
const btnEnviar = document.getElementById("btnEnviar")
const selPaises = document.getElementById("paises")
const selRegiones = document.getElementById("regiones")
const chkTerms = document.getElementById("terms")
const chkEmail = document.getElementById("email")
const btnFinalizar = document.getElementById("finalizar")
const divOculto = document.getElementById("oculto")

divOculto.style.display = "none"

const activarEnviar = () => {btnEnviar.disabled = false}
rdInvitado.addEventListener("change", activarEnviar)
rdPonente.addEventListener("change", activarEnviar)
rdSocio.addEventListener("change", activarEnviar)

btnEnviar.addEventListener("click",() => {
    divOculto.style.display = "block"
})

const activarFinalizar = () => {
    btnFinalizar.disabled = !(chkTerms.checked && chkEmail.checked)
}
chkTerms.addEventListener("click", activarFinalizar)
chkEmail.addEventListener("click", activarFinalizar)

const loadJson = async () => {
    const res = await fetch("./data.json")
    const data = await res.json()

    data.forEach(pais => {
        const option = document.createElement("option")
        option.value = pais.countryShortCode
        option.textContent = pais.countryName
        selPaises.appendChild(option)
    });

    selPaises.addEventListener("change", (e) => {
        console.log(e.target.value)
        data.forEach((pais)=>{
            if (pais.countryShortCode === e.target.value) {
                selRegiones.options.length = 1
                pais.regions.forEach(()=>{
                    const option = document.createElement("option")
                    option.value = region.shortCode
                    option.textContent = region.countryName
                    selRegiones.appendChild(option)
                })
            }
        })
    })
}
loadJson()