import calculate from "./calculate.js";

// Array with allowed keys to be typed in the input bar
const allowed_keys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "%",
];

// Adds restrictions of what can be typed in the input bar
export function keyTyped(result_input) {
  input.addEventListener("keydown", function (ev) {
    ev.preventDefault();

    // Allows only allowed characters to be typed
    if (allowed_keys.includes(ev.key)) {
      input.value += ev.key;
      return;
    }

    // Implements the backspace key for deleting the last character
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1);
      result_input.value = "";
    }

    // Implements Enter key for calculating the result
    if (ev.key === "Enter") {
      calculate(result_input);
    }
  });
}

// Implements click function on the buttons to add their values to the input bar
export function keyPressed() {
  document.querySelectorAll(".char-key").forEach(function (char_key) {
    char_key.addEventListener("click", function () {
      input.value += char_key.dataset.value;
    });
  });
}

// Calculate function for Equals button
export function calculateEqualsButton(result_input) {
  document.getElementById("equals").addEventListener("click", function () {
    calculate(result_input);
  });
}

// Clear function for C button
export function clear(input, result_input, button_copy) {
  document.getElementById("clear").addEventListener("click", function () {
    input.value = "";
    result_input.value = "";
    button_copy.innerText = "Copiar";
    button_copy.classList.remove("error", "success");
    result_input.classList.remove("error");
    input.focus();
  });
}

// Copy Result function
export function copyResult(result_input, button_copy) {
  document
    .getElementById("copy-to-clipboard")
    .addEventListener("click", function () {
      // Verifies if result is empty and return error
      if (result_input.value === "") {
        button_copy.innerText = "Resultado vazio!";
        button_copy.classList.add("error");
        return; // Stops execution here
      }

      if (button_copy.innerText === "Copiar") {
        button_copy.innerText = "Copiado!";
        button_copy.classList.add("success");
        navigator.clipboard.writeText(result_input.value); // Copies to clipboard
      } else {
        button_copy.innerText = "Copiar";
        button_copy.classList.remove("success");
      }
    });
}
