
const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const buttonclik= document.querySelector("button")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    buttonclik.style.visibility = "hidden"
}

function cliqueiNaMascara(){
    form.style.left = "-300px"
    form.style.transform ="translatex(0)"
    mascara.style.visibility = "hidden"
    buttonclik.style.visibility ="visible"
}
