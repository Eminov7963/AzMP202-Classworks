import { getDatalocalstorage, setDatalocalstorage } from "./helper.js";

const sub_form = document.querySelector("form");
const user_email = document.querySelector("#user_email");
const password = document.querySelector("#password");

let users = getDatalocalstorage("users") || [];
sub_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const log_user_email = user_email.value.trim();
  const log_password = password.value.trim();

  const logForm = users.find((element) => {
    return element.password === log_password &&
      (element.Username === log_user_email || element.email === log_user_email);
  });
  if (logForm) {
    logForm.logged = true;
    setDatalocalstorage("users", users);
    window.location.replace("index.html");
  } else {
    window.alert("Bele bir login yoxdur!!");
  }
});
