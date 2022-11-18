const input = document.getElementById("input");
const result_input = document.getElementById("result");
const button_copy = document.getElementById("copy-to-clipboard");

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
    calculate();
  }
});

// Implements click function on the buttons to add their values to the input bar
document.querySelectorAll(".char-key").forEach(function (char_key) {
  char_key.addEventListener("click", function () {
    input.value += char_key.dataset.value;
  });
});

// Clear function for C button
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  result_input.value = "";
  button_copy.innerText = "Copiar";
  button_copy.classList.remove("error", "success");
  result_input.classList.remove("error");
  input.focus();
});

// Calculate function for Equals button
document.getElementById("equals").addEventListener("click", calculate);

// Calculate function
function calculate() {
  // In case of wrong expression, error set as default
  result_input.value = "ERRO";
  result_input.classList.add("error");

  const result = eval(input.value);
  result_input.value = result;
  result_input.classList.remove("error");
}

// Switch Theme function
document
  .getElementById("theme-switcher")
  .addEventListener("click", function () {
    const main = document.querySelector("main");
    const root = document.querySelector(":root"); // For CSS variables

    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f1f1");
      root.style.setProperty("--font-color", "#212529");
      main.dataset.theme = "light";
    } else {
      root.style.setProperty("--bg-color", "#212529");
      root.style.setProperty("--font-color", "#f1f1f1");
      main.dataset.theme = "dark";
    }
  });

// Copy Result function
document
  .getElementById("copy-to-clipboard")
  .addEventListener("click", function (ev) {
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
