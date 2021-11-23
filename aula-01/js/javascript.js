//Defenir variavel caixa
let caixa = document.getElementById('caixa');

//Adicionar eventos com o mouse na variavel caixa( ativa quando o usúario clicar dentro da div)
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar funçao variavel clicar
function clicar(){
    caixa.innerHTML = 'Você clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'white';

}

//Criar funçao da variavel entra (ativa quando o mouse passar dentro da div)
function entrar(){
    caixa.innerHTML = 'Entrou';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black';
}

//Criar funçao da variavel sair (ativa quando tira o mouse da div )

function sair(){
    caixa.innerHTML = '<strong>Passe o mouse</strong>';
    caixa.style.background = 'yellowgreen';
    caixa.style.color = 'white';

//Deixa a fonte em negrito
    // caixa.style.fontWeight = '900'

}