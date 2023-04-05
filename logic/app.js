import { validateForm } from "./validate-form.js";

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  }
});
