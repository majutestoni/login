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

    let modal_card = document.getElementById('modal_card')

    let usuarioValid = {
        nome: '',
        usuario: '',
        senha: ''
    }



    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))

    listaUsuarios.forEach(item => {

        if (usuario.value == item.usuarioCadastrado && senha.value == item.senhaCadastrada) {

            usuarioValid = {
                nome: item.nomeCadastrado,
                usuario: item.usuarioCadastrado,
                senha: item.senhaCadastrada
            }

        }
    });




    if (usuario.value == usuarioValid.usuario && senha.value == usuarioValid.senha) {

        modal_card.setAttribute('style', 'display: flex')
        modal_card.addEventListener('click', (evento) => {
            if (evento.target.className == 'ok' || evento.target.className == 'fechar') {
                modal_card.setAttribute('style', 'display: none')
            }
        })


    } else {
        mensagemErro.setAttribute('style', 'display: block');
        mensagemErro.innerHTML = 'Usuario ou senha incorretos'
        usuarioLabel.setAttribute('style', 'color: rgb(172, 7, 103)')
        usuario.setAttribute('style', 'border-color: rgb(172, 7, 103)')
        senha.setAttribute('style', 'border-color: rgb(172, 7, 103)')
        senhaLabel.setAttribute('style', 'color: rgb(172, 7, 103)')
    }


}




