document.getElementById('permissaoEntrada').innerText = 'Pesquisando...'

const listaConvidados = ['Caio', 'Stephany', 'Alexandre', 'João', 'Maria']

function verificarPermissao(){
    let nomeConvidado = document.getElementById('convidado').value;
    let nome = document.getElementById('nome').value;
    if(listaConvidados.includes(nomeConvidado) && nome != undefined && nome != ''){
        document.getElementById('permissaoEntrada').innerText = "Voce pode entrar!"
    }else if(nome == undefined || nome == ''){
        document.getElementById('permissaoEntrada').innerText = 'Seu nome precisa ser digitado!'
    }else{
        document.getElementById('permissaoEntrada').innerText = 'Voce nao esta na lista, verifique se digitou corretamente o nome de quem te convidou.'
    }
}