const aviso = document.getElementsByClassName (`botoes_postar`)

function alerta(){
    alert(`sistema indisponivel temporariamente`)
};

function alerta2(){
    alert('operação cancelada')
}

function alerta3(){
    alert('Formulario enviado com sucesso !!')
}

document.getElementById('btnCadastro').addEventListener('click', function() {
    alert('Cadastro realizado com sucesso!')

    window.location.href = 'login.html'
})