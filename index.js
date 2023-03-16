const openModal = document.getElementById("open-modal");
const send = document.getElementById("send");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal")
const formulary = document.getElementById("form")
const modal2 = document.getElementById("modal2");

//abrir modal
openModal.addEventListener("click", ()=>{
  modal.showModal();
});

//cerrar modal
closeModal.addEventListener("click", ()=>{
  modal.close();
  formulary.reset()
})

//form -- fecha actual en adelante
date.min = new Date().toISOString().split("T")[0];

//envia y guarda los datos del formulario en un objeto
function seend(){
  formulary.addEventListener("submit", (e)=>{
  e.preventDefault()
  const data = Object.fromEntries(
    new FormData(e.target)
  )
  //muestra el objeto
  console.log(JSON.stringify(data))
  //borrar campos del formulario
  formulary.reset()
  modal.close();
})
}
// abrir y cerrar modal2
formulary.addEventListener("submit", ()=>{
  setTimeout(function openModal2(){modal2.showModal()}, 500)
  setTimeout(function closeModal2(){modal2.close()}, 4000)
})



// light- dark mode
const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");

lightModeBtn.addEventListener("click", setDarkMode);
darkModeBtn.addEventListener("click", setLightMode);

function setDarkMode() {
  setUserTheme("dark");
}

function setLightMode() {
  setUserTheme("light");
}

function setUserTheme(newTheme){
  document.documentElement.setAttribute("data-theme", newTheme);
}
