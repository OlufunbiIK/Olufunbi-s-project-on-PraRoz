const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const passwordcheck =document.getElementById("passwordcheck");

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue= username.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const passwordcheckValue= passwordcheck.value.trim();

if (usernameValue === ""){
    setErrorfor(username, "Sorry! username field can not be empty");
}else if(usernameValue.length < 5){
    setErrorfor(username, "Username must contain at least five characters");
}else{
    setSuccessfor(username);
}


if (emailValue === ""){
    setErrorfor(email, "Sorry! email field can not be empty");
}else if
(!isEmail(emailValue)){
    setErrorfor(email, "Email is not valid!");
}
else{
    setSuccessfor(email);
}



if (passwordValue === ""){
    setErrorfor(password, "Sorry! password field can not be empty");
}else if
(passwordValue.length < 8){
    setErrorfor(password, "password must contain at least 8 characters!");
}else{
    setSuccessfor(password);
}



if (passwordcheckValue === ""){
    setErrorfor(passwordcheck, "Sorry! password field can not be empty");
}else if
(passwordValue !== passwordcheckValue){
    setErrorfor(passwordcheck, "Password do not match!");
}else if(passwordcheckValue.length<8){
    setErrorfor(passwordcheck, "password must contain at least 8 characters!");
}else{
    setSuccessfor(passwordcheck);
}
}



function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password) {
    return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password);
}



function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText=message;
    formControl.className = "form-control error";
}

function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


