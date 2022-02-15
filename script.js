const passwordInput = document.getElementById('senha');
const eye = document.getElementById('eye');

function eyeClick() {
    let inputTypeisPassword = passwordInput.type == 'password';

    if (inputTypeisPassword) {
        showPassword();
    } else {
        hidePassword();
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text");
}

function hidePassword() {

    passwordInput.setAttribute("type", "password");
}

