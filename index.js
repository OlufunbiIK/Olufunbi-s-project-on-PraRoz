document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbarUl = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', function() {
        navbarUl.classList.toggle('show');
    });
});


const form =document.getElementById("form");
const username =document.getElementById("username");
const password =document.getElementById("password");

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue= username.value.trim();
    const passwordValue= password.value.trim();

if (usernameValue === ""){
    setErrorfor(username, "Sorry! username field can not be empty!");
}else if(usernameValue.length < 5){
    setErrorfor(username, "Username must contain at least five characters");
}else{
    setSuccessfor(username);
}



if (passwordValue === ""){
    setErrorfor(password, "Sorry! password field can not be empty!");
}else if
(passwordValue.length < 5){
    setErrorfor(password, "password must contain at least 5 characters!");
}else{
    setSuccessfor(password);
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


