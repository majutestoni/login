const passwordInput = document.getElementById('senha');
const eye = document.getElementById('eye');
const eyeFechado = document.getElementById('eyeFechado');
let modal = document.getElementById('modal')

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
    let mensagemSucesso = document.getElementById('mensagemSucesso');

    let entrar;


    let listaUsuarios = [];

    let usuarioValid = {
        nome: '',
        usuario: '',
        senha: ''
    }

    let valido = false

    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))

    listaUsuarios.forEach(item => {

        if (usuario.value == item.usuarioCadastrado && senha.value == item.senhaCadastrada) {

            usuarioValid = {
                nome: item.nomeCadastrado,
                usuario: item.usuarioCadastrado,
                senha: item.senhaCadastrada
            }
            valido = true
        }
    });
    if (valido == true) {
        entrar.addEventListener('click', () => {
            modal.setAttribute('style', 'display: block');

        })
    } else {
        mensagemErro.setAttribute('style', 'display: block');
        mensagemErro.innerHTML = 'Deu errado'
    }

}




