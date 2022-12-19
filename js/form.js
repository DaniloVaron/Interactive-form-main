const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form input");
const complete = document.querySelector(".confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
    }
  });

  if (
    nameInput.value &&
    numberInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvcInput.value
  ) {
    complete.classList.remove("hidden");
    form.classList.add("hidden");
  }
});

complete.addEventListener("click", (e) => {
  complete.classList.add("hidden");
  form.classList.remove("hidden");
});

const cardName = document.getElementById("name");
const nameInput = document.getElementById("nameInput");

const number = document.getElementById("number");
const numberInput = document.getElementById("numberInput");

const month = document.getElementById("month");
const monthInput = document.getElementById("monthInput");

const year = document.getElementById("year");
const yearInput = document.getElementById("yearInput");

const cvc = document.getElementById("cvc");
const cvcInput = document.getElementById("cvcInput");

const btn = document.getElementById("btn");

function setName(e) {
  cardName.innerText = e.target.value;
}

function setNumber(e) {
  number.innerText = format(e.target.value);
}

function setMonth(e) {
  month.innerText = e.target.value;
}

function setYear(e) {
  year.innerText = e.target.value;
}

function setCvc(e) {
  cvc.innerText = e.target.value;
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

nameInput.addEventListener("keyup", setName);
numberInput.addEventListener("keyup", setNumber);
monthInput.addEventListener("keyup", setMonth);
yearInput.addEventListener("keyup", setYear);
cvcInput.addEventListener("keyup", setCvc);
