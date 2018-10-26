const valor = document.querySelector(".allButtons");
valor.addEventListener("click", onClick);
let firstNumber = "";
let secondNumber = "";
let operator = "";

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
      if (operator === "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        if (firstNumber === "") {
          result.innerText = "0";
        } else {
          result.innerText = firstNumber;
        }
      } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        if (secondNumber === "") {
          result.innerText = "0";
        } else {
          result.innerText = secondNumber;
        }
      }

      break;

    case "=":
      let resultado;
      if (operator === "+") {
        resultado = parseInt(firstNumber) + parseInt(secondNumber);
        result.innerText = String(resultado);
      } else if (operator === "-") {
        resultado = parseInt(firstNumber) - parseInt(secondNumber);
        result.innerText = String(resultado);
      } else if (operator === "×") {
        resultado = parseInt(firstNumber) * parseInt(secondNumber);
        result.innerText = String(resultado);
      } else if (operator === "÷") {
        resultado = parseInt(firstNumber) / parseInt(secondNumber);
        result.innerText = String(resultado);
      }
      firstNumber = String(resultado);
      operator = "";
      secondNumber = "";

      break;

    default:
      console.log("Algo va mal amigo");
  }
}
