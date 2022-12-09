export default function (result_input) {
  // In case of wrong expression, error set as default
  // Error will appear on console
  result_input.value = "ERRO";
  result_input.classList.add("error");

  const result = eval(input.value);
  result_input.value = result;
  result_input.classList.remove("error");
}
