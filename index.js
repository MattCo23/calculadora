const valor = document.querySelector(".allButtons");
valor.addEventListener("click", onClick);
let firstNumber = "";
let secondNumber = "";
let operator = "";
let container = "";

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
      if (
        operator !== "+" &&
        operator !== "-" &&
        operator !== "×" &&
        operator !== "÷"
      ) {
        firstNumber = firstNumber + character;
        result.innerText = firstNumber;
      } else {
        secondNumber = secondNumber + character;
        result.innerText = secondNumber;
      }
      break;

    case "C":
      firstNumber = "";
      secondNumber = "";
      operator = "0";
      result.innerText = "0";
      break;

    case "÷":
    case "×":
    case "-":
    case "+":
      operator = character;
      result.innerText = "";

      break;

    case "←":
      result.innerText = "";
      break;

    case "=":
      if (operator === "+") {
        let resultado1 = parseInt(firstNumber) + parseInt(secondNumber);
        result.innerText = String(resultado1);
        firstNumber = String(resultado1);
      } else if (operator === "-") {
        let resultado2 = parseInt(firstNumber) - parseInt(secondNumber);
        result.innerText = String(resultado2);
        firstNumber = String(resultado2);
      } else if (operator === "×") {
        let resultado3 = parseInt(firstNumber) * parseInt(secondNumber);
        result.innerText = String(resultado3);
        firstNumber = String(resultado3);
      } else if (operator === "÷") {
        let resultado4 = parseInt(firstNumber) / parseInt(secondNumber);
        result.innerText = String(resultado4);
        firstNumber = String(resultado4);
      }

      operator = "";
      secondNumber = "";

      break;

    default:
      console.log("Algo va mal amigo");
  }
}
