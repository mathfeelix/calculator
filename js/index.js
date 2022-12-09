const input = document.getElementById("input");
const result_input = document.getElementById("result");
const button_copy = document.getElementById("copy-to-clipboard");

// Calculate function
import calculate from "./calculate.js";
calculate(result_input);

// Switch Theme function
import themeSwitcher from "./themeSwitcher.js";
themeSwitcher();

// Clicks on the board functions
import {
  keyTyped,
  keyPressed,
  clear,
  copyResult,
  calculateEqualsButton,
} from "./keyHandlers.js";
keyTyped(result_input);
keyPressed();
clear(input, result_input, button_copy);
copyResult(result_input, button_copy);
calculateEqualsButton(result_input);
