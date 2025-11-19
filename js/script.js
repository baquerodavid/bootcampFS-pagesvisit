let contadorVisitas = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");

function visitCounter() {
  return window.addEventListener("load", () => {
    if (!localStorage.getItem("Contador")) {
      localStorage.setItem("Contador", 0);
      console.log(localStorage.getItem("Contador"))
      contadorVisitas.textContent = localStorage.getItem("Contador")
    } else {
      let visitCounter = parseFloat(localStorage.getItem("Contador"));
      visitCounter++;
      console.log(visitCounter)
      localStorage.setItem("Contador", visitCounter)
      contadorVisitas.textContent = localStorage.getItem("Contador")
      console.log(localStorage);
      //console.log("Sin el parseFloat:", localStorage.getItem("Contador"));
      //console.log("CON el parseFloat:", parseFloat(localStorage.getItem("Contador")));
    }
  })
}

function resetBtn() {
  btnReestablecer.addEventListener("click", () => {
    localStorage.setItem("Contador", 0);
    contadorVisitas.textContent = localStorage.getItem("Contador");
    console.log("Después de restablecer el contador, ahora es:", localStorage.getItem("Contador"))
  })
}

visitCounter();
resetBtn();