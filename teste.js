window.addEventListener("load", () => {
        let verSenha = document.querySelector('fa-eye')
        verSenha.addEventListener('Click', () => {
            let verPassword = document.querySelector('#senha')

            if (verPassword.getAtrribute('type') == 'password') {
                verPassword.setAttribute('type', 'text')
            } else {
                verPassword.setAttribute('type', 'password')
            }
        })
    })