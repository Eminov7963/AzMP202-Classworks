import { getDatalocalstorage, setDatalocalstorage } from "./helper.js";

const sub_form = document.querySelector("form");
const email_input = document.querySelector("#email");
const username = document.querySelector("#User_name");
const password = document.querySelector("#password");

let users = getDatalocalstorage("users") || [];
sub_form.addEventListener("submit",function(e){
    e.preventDefault();
    const emailValue = email_input.value.trim();
    const UsernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const user = {
      id: Date.now(),
      Username: UsernameValue,
      email: emailValue,
      password: passwordValue,
      logged: false
    };
    users.push(user)
    setDatalocalstorage("users", users);
    resetform();
    window.location.replace("login.html")
})

function resetform(){
    sub_form.reset();
}