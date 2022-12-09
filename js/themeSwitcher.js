export default function () {
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
}
