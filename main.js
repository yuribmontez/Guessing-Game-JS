var msg1 = document.getElementById('mensagem1');
var msg2 = document.getElementById('mensagem2');
var msg3 = document.getElementById('mensagem3');

var resposta = Math.floor(Math.random() * 100) + 0;
var chutes = 7;
var numerosChutados = [];
var chutesGastos = 0;
var acertou = false;
function jogarNovamente() {
    location.reload();
}

function jogar() {
    var chute = parseInt(document.getElementById('chute').value);
    chutes -= 1;
    chutesGastos += 1;
    if (chute < 0 || chute > 100) {
        alert('Por favor escolha um número entre 0 e 100.')
    } else {
        numerosChutados.push(chute);
        while (chutes >= 0) {
            if (chute < resposta) {
                msg1.textContent = 'Esse é seu melhor chute? Tente um número maior.';
                msg2.textContent = 'Nº de chutes: ' + chutes;
                msg3.textContent = 'Números chutados: ' + numerosChutados;
                break;
            }
            else if (chute > resposta) {
                msg1.textContent = 'Chutou alto demais. Tente um número menor.';
                msg2.textContent = 'Nº de chutes: ' + chutes;
                msg3.textContent = 'Números chutados: ' + numerosChutados;
                break;
            }
            else if (chute == resposta) {
                acertou = true;
                msg1.textContent = 'Boaaaaaaaa, você acertou. Como você conseguiu? :O';
                msg2.textContent = 'A resposta era: ' + resposta;
                msg3.textContent = 'Você acertou em: ' + chutesGastos + ' chutes';
                document.getElementById('botao').style.display = 'none';
                document.getElementById('chute').style.display = 'none';
                document.getElementById('botao2').style.display = 'inline';
                break;
            }
        }
        if (!acertou && chutes == 0) {
            msg1.textContent = 'Erroooooooou feio, errooooooooou rude. O número era: ' + resposta;
            msg2.textContent = '';
            msg3.textContent = 'Números chutados: ' + numerosChutados;
            document.getElementById('chute').style.display = 'none';
            document.getElementById('botao').style.display = 'none';
            document.getElementById('botao2').style.display = 'inline';
        }
        if (chutes == 0) {
            document.getElementById('chute').style.display = 'none';
            document.getElementById('botao').style.display = 'none';
            document.getElementById('botao2').style.display = 'inline';
        }
    }

}
