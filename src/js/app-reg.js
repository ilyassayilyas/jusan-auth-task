const regBtn = document.querySelector("#registr-btn");
const emailInput = document.querySelector("#email-input");
const loginInput = document.querySelector("#login-input");
const surnameInput = document.querySelector("#surname-input");
const nameInput = document.querySelector("#name-input");
const phoneNumberInput = document.querySelector("#phone-number-input");
const passwordInput = document.querySelector("#password-input");
const passwordRepeatInput = document.querySelector("#password-repeat-input");

regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkNameSurname(nameInput);
  checkNameSurname(surnameInput);
  checkLogin(loginInput);
  checkEmail(emailInput);
});

function checkNameSurname(input) {
  const pattern = /^[A-Za-zА-Яа-я-]+$/;
  if (!pattern.test(input.value)) {
    input.nextSibling.innerText =
      "Must be filled. Only latin, russian letters and hyphen sign";
  } else {
    input.nextSibling.innerText = "";
  }
}

function checkLogin(input) {
  const pattern = /^[A-Za-z0-9-_]{3,15}$/;
  const onlyNumberLogin = /^[0-9]+$/;
  if (onlyNumberLogin.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText = "Cannot contain only numbers";
  } else if (!pattern.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText =
      "Must be filled. Length from 3 to 15 symbol. Only latin letters and - / signs";
  } else {
    input.nextSibling.innerText = "";
  }
}

function checkEmail(input) {
  const pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (!pattern.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText = "Must contain proper email format";
  } else input.nextSibling.innerText = "";
}

function checkPhone(input) {}
