var msg1 = document.getElementById('mensagem1');
var msg2 = document.getElementById('mensagem2');
var msg3 = document.getElementById('mensagem3');

var resposta = Math.floor(Math.random() * 100) + 0;
var chutes = 0;
var numerosChutados = [];

function jogar() {
    var chute = document.getElementById('chute').value;
    if (chute < 0 || chute > 100) {
        alert('Por favor escolha um número entre 0 e 100.');
    } else {
        numerosChutados.push(chute);
        chutes += 1;

        if (chute < resposta) {
            msg1.textContent = "Esse é seu melhor chute? Tente um número maior.";
            msg2.textContent = 'Nº de chutes: ' + chutes;
            msg3.textContent = 'Números chutados: ' + numerosChutados;
        }
        else if (chute > resposta) {
            msg1.textContent = "Chutou alto demais. Tente um número menor.";
            msg2.textContent = 'Nº de chutes: ' + chutes;
            msg3.textContent = 'Números chutados: ' + numerosChutados;
        }
        else if (chute == resposta) {
            msg1.textContent = "Boaaaaaaaa, você acertou. Como você conseguiu? :O";
            msg2.textContent = 'A resposta era: ' + resposta;
            msg3.textContent = 'Você acertou em: ' + chutes + ' chutes';
            document.getElementById('botao').disabled = true;
        }
    }
}