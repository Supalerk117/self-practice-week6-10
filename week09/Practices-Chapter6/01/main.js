const form = document.querySelector("form");
const inputs = document.querySelectorAll("form > input");
const pass = document.querySelector("#password");
const cpass = document.querySelector("#confirm-password");
const submit = document.querySelector("#submit");
const display = document.querySelector("p");

form.addEventListener("submit", (e) => {
  const emptyInput = Array.from(inputs).some((i) => !i.value.trim());

  if (emptyInput) {
    e.preventDefault();
    display.innerText = "missing some values, please try again!";
    display.style.color = "red";
    return;
  }
  if (pass.value !== cpass.value) {
    e.preventDefault();
    display.innerText = "password and confirm do not match,check again";
    display.style.color = "red";
    return;
  }

  display.innerText = "your data completed";
  display.style.color = "green";
  inputs.forEach((i) => {
    i.value = "";
  });
});
