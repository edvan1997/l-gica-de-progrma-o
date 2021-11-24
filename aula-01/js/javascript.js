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
//Pegar a data atual do computador
let agora = new Date();
//Pega o dia da semana em valores numéricos
let diaSemana = agora.getDay();
//Pega o ID da Div
let data = document.getElementById('data')

// switch(diaSemana){

//     case 0:
//         data.innerHTML = 'Domingo';
//         data.style.background = 'blue'
//     break;

//     case 1:
//          data.innerHTML = 'Segunda-feira';
//          data.style.background = 'grey'
//     break;

//     case 2:
//          data.innerHTML = 'Terça-feira';
//          data.style.background = 'pink'
//     break;

//     case 3:
//          data.innerHTML = 'Quarta-feira';
//          data.style.background = 'black'
//     break;
    
//     case 4:
//          data.innerHTML = 'Quinta-feira';
//          data.style.background = 'orange'
//     break;
    
//     case 5:
//          data.innerHTML = 'Sexta-feira';
//          data.style.background = 'yellow'
//     break;

//     case 6:
//          data.innerHTML = 'Sábado';
//          data.style.background = 'green'
//     break;

//     default:
//          console.log('Dia inválido');
//     break;
// }

if(diaSemana == 0){
    data.innerHTML = ('Domingo');
    data.style.background = ('blue');
}else if(diaSemana == 1){
    data.innerHTML =('Segunda');
    data.style.background = ('orange');
}else if(diaSemana == 2){
    data.innerHTML = ('Terça-feira');
    data.style.background = ('black');
}else if(diaSemana == 3){
    data.innerHTML = ('Quarta-feira');
    data.style.background =('grey')
}else if(diaSemana == 4){
    data.InnerHTML = ('Quinta-feira');
    data.style.background=('pink');
}else if(diaSemana == 5){
    data.innerHTML = ('Sexta-feira');
    data.style.background = ('yellow');
}else if(diaSemana == 6){
    data.innerHTML = ('Sábado');
    data.style.background = ('red');
}else{
    data.innerHTML = ('Data inválida');
    data.style.background =('white')
    data.style.color = ('black')
}


let cont = 0;
let contDiv = document.getElementById('cont');

while(cont < 50){
    cont++;
    contDiv.innerHTML = (cont);
}
