const button = document.getElementById("subbtn")
const cButton = document.getElementById("cbtn")
let popup = document.getElementById("popup")
 

function openPopup() {
popup.classList.add("open-popup")
 let h4 = document.getElementById("h4")

 const input = document.getElementById("input")

h4.innerHTML = `Welcome ${input.value}`

 

}
function closePopup(){
    popup.classList.remove("open-popup")
}





















button.addEventListener("click", openPopup)
cButton.addEventListener("click", closePopup)