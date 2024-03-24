const loginInput = document.querySelector("#container-form-content-input-login");
const passwordInput = document.querySelector("#container-form-content-input-password");

//кнопа что-то не работает
//const registrationButton = document.getElementById("container-form-content-button");

const button = document.getElementById('button-change-theme');

let inputValueLogin;
let inputValuePassword;

//registrationButton.setAttribute('disabled', 'disabled');
loginInput.addEventListener("input", ()=>{
    inputValueLogin = loginInput.value;
});
passwordInput.addEventListener("input", ()=>{
    inputValuePassword = passwordInput.value;
});

loginInput.addEventListener("blur", ()=>{
    if (!inputValueLogin || inputValueLogin.length<5){
        loginInput.className+=" input-error";
        //Мне не понравилось, как выглядит в моей верстке, но оно работает. Запариваться с переделыванием не стала(
        /*const br = document.createElement('br');
        document.querySelector("#errorMessage").append("Incorrect login");*/
        //registrationButton.setAttribute('disabled', 'disabled');
        //поэтому не очень удобный вариант
        alert("Incorrect login");
    }
    else
    {
        loginInput.className="container-form-element input login";
    }
});
passwordInput.addEventListener("blur", ()=>{
    if (!inputValuePassword || inputValuePassword.length<5){
        passwordInput.className+=" input-error";
       // registrationButton.setAttribute('disabled', 'disabled');
        alert("Incorrect password");
    }
    else
    {
        passwordInput.className="container-form-element input password";
    }
});



//удаление при фокусе
/*loginInput.addEventListener("focus", ()=>{
    document.getElementById('errorMessage').innerHTML = '';
});*/

button.addEventListener('click', () => {

    var link = document.getElementById("style-form"),
        href = link.getAttribute('href');

    if(href == 'public/styles/style.css') {
        link.href="public/styles/night-style.css";
    } else if (href == 'public/styles/night-style.css') {
        link.href="public/styles/style.css";
    }

});


/*registrationButton.addEventListener('click', () => {

    if (inputValuePassword.length>5 && inputValueLogin.length>5)
    {
        registrationButton.removeAttribute('disable');
    }

});*/



