const passwordInput = document.getElementById('senha');
const eye = document.getElementById('eye');
const eyeFechado = document.getElementById('eyeFechado');

function eyeClick() {
    let inputTypeisPassword = passwordInput.type == 'password';

    if (inputTypeisPassword) {
        showPassword();
        eye.setAttribute('style', 'display: none');
        eyeFechado.setAttribute('style', 'display: block');
    } else {
        hidePassword();
        eye.setAttribute('style', 'display: block');
        eyeFechado.setAttribute('style', 'display: none');
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text");
}

function hidePassword() {

    passwordInput.setAttribute("type", "password");
}

function entrar() {
    let usuario = document.getElementById('usuario');
    let usuarioLabel = document.getElementById('usuarioLabel');

    let senha = document.getElementById('senha');
    let senhaLabel = document.getElementById('senhaLabel');

    let mensagemErro = document.getElementById('mensagemErro');
    let listaUsuarios = [];

    let usuarioValid = {
        nome: '',
        usuario: '',
        senha: ''
    }

    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))

    listaUsuarios.forEach((item) => {
        if (usuario.value == item.usarioCadastrado && senha.value == item.senhaCadastrada) {

            usuarioValid = {
                nome: item.nomeCadastrado,
                usuario: item.usarioCadastrado,
                senha: item.senhaCadastrada
            }
        }
    });
console.log(usuarioValid)
}

