const chave = 'a1c59842-c71b-4d4d-89bb-3b21b040930d';     //Chave provisória

function enviarForm(url, body){
    //Envia o formulário para o Static Forms
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(body));
    xhr.onload = function(){
        alert('Mensagem enviada com sucesso!');
    }
}

function recebeConteudo(){
    event.preventDefault();
    let url = "https://api.staticforms.xyz/submit";
    let nome = document.getElementById('nomeInput').value;
    let email = document.getElementById('emailInput').value;
    let telefone = document.getElementById('telInput').value;
    let assunto = document.getElementById('assuntoInput').value;
    let mensagem = document.getElementById('mensagemInput').value;
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
document.getElementById('formulario').addEventListener('submit', recebeConteudo);

// "Mascara" para telefone...
function mascara_tel(event){
    let tel = document.getElementById('telInput');
    switch(tel.value.length){
        case 1:
            tel.value = "("+ tel.value;
                break;
        case 3:
            tel.value += ")";
            break;
    }
}