const input = document.getElementById("input");
const result_input = document.getElementById("result");
const button_copy = document.getElementById("copy-to-clipboard");

// Switch Theme function
import themeSwitcher from "./themeSwitcher.js";
themeSwitcher();

// Clicks on the board functions
import {
  keyTyped,
  keyPressed,
  calculateEqualsButton,
  clear,
  copyResult,
} from "./keyHandlers.js";
keyTyped(result_input);
keyPressed();
calculateEqualsButton(result_input);
clear(input, result_input, button_copy);
copyResult(result_input, button_copy);
