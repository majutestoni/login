let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmar = document.querySelector('#labelConfirmar');

nome.addEventListener('keyup', () => {
    if (nome.ariaValueMax <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML= 'Nome *Insira no minimo 3 caracteres'
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML= 'Nome'
    }
})

function cadastrar() {

}