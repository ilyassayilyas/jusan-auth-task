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
  const validName = checkNameSurname(nameInput);
  const validSurName = checkNameSurname(surnameInput);
  const validLogin = checkLogin(loginInput);
  const validEmail = checkEmail(emailInput);
  const validPhone = checkPhone(phoneNumberInput);
  const validPassword = checkPassword(passwordInput);
  const validPaswwordRepeat = checkPasswordRepeat(
    passwordInput,
    passwordRepeatInput
  );
  if (
    validEmail &&
    validSurName &&
    validLogin &&
    validName &&
    validPassword &&
    validPhone &&
    validPaswwordRepeat
  ) {
    sumbitFormObject();
  }
});

emailInput.addEventListener("focus", () => {
  checkEmail(emailInput);
});

emailInput.addEventListener("blur", () => {
  checkEmail(emailInput);
});

loginInput.addEventListener("focus", () => {
  checkLogin(loginInput);
});

loginInput.addEventListener("blur", () => {
  checkLogin(loginInput);
});

nameInput.addEventListener("focus", () => {
  checkNameSurname(nameInput);
});

nameInput.addEventListener("blur", () => {
  checkNameSurname(nameInput);
});

surnameInput.addEventListener("focus", () => {
  checkNameSurname(surnameInput);
});

surnameInput.addEventListener("blur", () => {
  checkNameSurname(surnameInput);
});

phoneNumberInput.addEventListener("focus", () => {
  checkPhone(phoneNumberInput);
});

phoneNumberInput.addEventListener("blur", () => {
  checkPhone(phoneNumberInput);
});

passwordInput.addEventListener("focus", () => {
  checkPassword(passwordInput);
});

passwordInput.addEventListener("blur", () => {
  checkPassword(passwordInput);
});

passwordRepeatInput.addEventListener("focus", () => {
  checkPasswordRepeat(passwordInput, passwordRepeatInput);
});

passwordRepeatInput.addEventListener("blur", () => {
  checkPasswordRepeat(passwordInput, passwordRepeatInput);
});

function checkNameSurname(input) {
  const pattern = /^[A-Za-zА-Яа-я-]+$/;
  if (!pattern.test(input.value)) {
    input.nextSibling.innerText =
      "Must be filled. Only latin, russian letters and hyphen sign";
    return false;
  } else {
    input.nextSibling.innerText = "";
    return true;
  }
}

function checkLogin(input) {
  const pattern = /^[A-Za-z0-9-_]{3,15}$/;
  const onlyNumberLogin = /^[0-9]+$/;
  if (onlyNumberLogin.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText = "Cannot contain only numbers";
    return false;
  } else if (!pattern.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText =
      "Must be filled. Length from 3 to 15 symbol. Only latin letters and - / signs";
    return false;
  } else {
    input.nextSibling.innerText = "";
    return true;
  }
}

function checkEmail(input) {
  const pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (!pattern.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText = "Must contain proper email format";
    return false;
  } else {
    input.nextSibling.innerText = "";
    return true;
  }
}

function checkPhone(input) {
  const pattern = /^(\+)?([0-9]{8,15})$/;
  if (!pattern.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText =
      "Must containe proper phone format. 8 - 15 digits only";
    return false;
  } else {
    input.nextSibling.innerText = "";
    return true;
  }
}

function checkPassword(input) {
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;
  if (!pattern.test(input.value)) {
    input.nextSibling.innerText = "";
    input.nextSibling.innerText =
      "8 - 30 symbols only, at least 1 number and 1 special character";
    return false;
  } else {
    input.nextSibling.innerText = "";
    return true;
  }
}

function checkPasswordRepeat(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    pass2.nextSibling.innerText = "";
    pass2.nextSibling.innerText = "Password does not match";
    return false;
  } else {
    pass2.nextSibling.innerText = "";
    return true;
  }
}

function sumbitFormObject() {
  const formData = {
    email: emailInput.value,
    login: loginInput.value,
    name: nameInput.value,
    surname: surnameInput.value,
    phone: phoneNumberInput.value,
    password: passwordInput.value,
  };
  console.log(formData);
}
