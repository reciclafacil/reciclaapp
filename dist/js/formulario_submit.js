const chave = 'a1c59842-c71b-4d4d-89bb-3b21b040930d';     //Chave provisória

function enviarForm(url, body){
    //Envia o formulário para o Static Forms
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(body));
    xhr.onload = function() {
        $('#formModal').modal('show');
        $('#formulario').trigger("reset");
    }
}

function recebeConteudo(){
    event.preventDefault();
    let url = "https://api.staticforms.xyz/submit";
    let nome = $('#nomeInput').val();
    let email = $('#emailInput').val();
    let telefone = $('#telInput').val();
    let assunto = $('#assuntoInput').val();
    let mensagem = $('#mensagemInput').val();
    body = {
        "accessKey" : chave,
        "$Nome" : nome,
        "$E-mail" : email,
        "$Telefone" : telefone,
        "subject" : assunto,
        "$Mensagem" : mensagem 
    }
    enviarForm(url, body);
}

$(function() {
    $('#formulario').submit(recebeConteudo);
});
