function doPasswordsMatch () {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('password_confrim');
    
    if (password.value == confirmPassword.value) {
        password.classList.remove('password-input');
        confirmPassword.classList.remove('password-input');
    }
    else if (!(password.classList.contains('password-input')) && password.value != confirmPassword.value) {
        password.classList.add('password-input');
        confirmPassword.classList.add('password-input');
    }
}