// let password = document.getElementById("passwordRegister")
// let confirmPassword = document.getElementById("ConPasswordRegister")

function validar() {

    let password = formRegisterUser.passwordRegister.value
    let confirmPassword = formRegisterUser.ConPasswordRegister.value

    // if(password == '' || password.length <= 12){
    //     alert('Menor que 12 digitos ou esta vazia');
    //     formRegisterUser.passwordRegister.focus()
    //     return false
    // }

    if(password != confirmPassword){
        alert('Senhas diferentes');
        formRegisterUser.ConPasswordRegister.focus()
        return false
    }

    if(confirmPassword == '' || confirmPassword.length <= 12){
            alert('Menor que 12 digitos ou esta vazia');
            formRegisterUser.ConPasswordRegister.focus()

        document.getElementById("confPwd").style.display = "block"
        document.getElementById("confPwd").innerHTML = "confirmação errada diferentes"
            return false
    }
}

// password.onchange = validatePassword;
// confirmPassword.onkeyup = validatePassword;