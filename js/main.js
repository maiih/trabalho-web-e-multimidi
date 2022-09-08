/** console.log(document);

document.querySelector('nav').style.backgroundColor = 'cyan'; */

var formulario = document.querySelector('form#contato')
formulario.addEventListener('submit', enviar);

function enviar(evento){
    evento.preventDefault()

    formulario.style.opacity = '0.5';

    var dados = new FormData(formulario);
    var nome = dados.get('nome');
    var email = dados.get('email');
    var turma = dados.get('turma');
    var motivo = dados.get('motivo');
    var mensagem = dados.get('mensagem');
    console.log(nome, email, turma, motivo, mensagem);
    //enviar por email
    alert('Email enviado com sucesso!')
    var templateParams = {
        "nome": nome,
        "turma": turma,
        "motivo": motivo,
        "mensagem": mensagem
     };
         
     emailjs.send('service_y3bhlxf', 'template_umrnihv', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

}

var resultado = document.createElement('p')
resultado.style.padding = '10px'
resultado.style.textAlign = 'center'
formulario.append(resultado)