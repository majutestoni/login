let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;//Aletara maneira de validar cadastro(futuramente)

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmar = document.querySelector('#labelConfirmar');
let validConfirmar = false;

let mensagemErro = document.getElementById('mensagemErro')
let mensagemSucesso = document.getElementById('mensagemSucesso')


nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        labelNome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome'
        validNome = true;
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 3) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 4 caracteres'
        labelUsuario.setAttribute('style', 'border-color: red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuario'
        validUsuario = true;
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 3) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no minimo 4 caracteres'
        labelSenha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha'
        validSenha = true;
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmar.setAttribute('style', 'color: red');
        labelConfirmar.innerHTML = 'Confirmar Senha *As senhas não conferem'
        labelConfirmar.setAttribute('style', 'border-color: red');
        validConfirmar = false;
    } else {
        labelConfirmar.setAttribute('style', 'color: green');
        labelConfirmar.innerHTML = 'Confirmar Senha'
        validConfirmar = true;
    }
})

function cadastrar() {
    if (validConfirmar && validSenha && validNome && validUsuario) {
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');

        listaUsuarios.push(
            {
                nomeCadastrado: nome.value,
                usuarioCadastrado: usuario.value,
                senhaCadastrada: senha.value

            }
        )
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));


        mensagemSucesso.setAttribute('style', 'display:block');
        mensagemErro.setAttribute('style', 'display:none');
        mensagemSucesso.innerHTML = '<strong>Cadastrando usuario...</strong>';

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000);


    } else {
        mensagemErro.setAttribute('style', 'display:block')
        mensagemSucesso.setAttribute('style', 'display:none')
        mensagemErro.innerHTML = '<strong>Faltam campos a serem preenchidos!</strong>'
    }
}