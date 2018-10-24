const valor = document.querySelector(".allButtons");
valor.addEventListener("click", onClick);
let firstNumber = "";
let secondNumber = "";
      


function onClick(evento) {
  const result = document.querySelector(".result");
  const boton = evento.target;
  if (evento.target.tagName === "BUTTON") {
    result.innerText = boton.innerText;
  }
  let character = evento.target.innerText;
  switch (character) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      firstNumber = firstNumber + character; 
      result.innerText = firstNumber;
      break;
    case "C":
      firstNumber = "";
      result.innerText = 0;
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
      result.innerText = "";
      break;
    case "←":
      result.innerText = "";
      break;
    case "=":
      result.innerText = "";
      break;
    default:
      console.log("Algo va mal amigo");
  }
}
