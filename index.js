const valor = document.querySelector(".allButtons");

valor.addEventListener("click", onClick);

function onClick(evento) {
  const result = document.querySelector(".result");
  const boton = evento.target;
  if (evento.target.tagName === "BUTTON") {
    result.innerText = boton.innerText;
  }
}