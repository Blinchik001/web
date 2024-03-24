const loginInput = document.querySelector("#container-form-content-input-login");

let inputValueLogin;

loginInput.addEventListener("input", ()=>{
    inputValueLogin = loginInput.value;
    console.log(inputValueLogin);
});

loginInput.addEventListener("blur", ()=>{
    if (!inputValueLogin || inputValueLogin.length<5){
        loginInput.className+=" input-error";
        //Мне не понравилось, как выглядит в моей верстке, но оно работает. Запариваться с переделыванием не стала(
        /*const br = document.createElement('br');
        document.querySelector("#errorMessage").append("Incorrect login");*/

        //поэтому не очень удобный вариант
        alert("Incorrect login");
    }
    else
    {
        loginInput.className="container-form-element input login";
    }
});

//удаление при фокусе
/*loginInput.addEventListener("focus", ()=>{
    document.getElementById('errorMessage').innerHTML = '';
});*/