function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)\n')
   if(!operacao || operacao > 7){
    alert("Erro - operação Invalida");
    calculadora()
   }else{

let n1 = Number(prompt("Insira o primeiro valor: "));
let n2 = Number( prompt("Insira o segundo valor: "));
let resultado;

if(!n1 || !n2){
    alert("Erro -  parâmetros inválidos")
    calculadora();
}else{

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n1}  = ${resultado}`);
    novaopracao();
}

function subtracao(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2}  = ${resultado}`);
    novaopracao();
}
function multiplicao(){
    resultado = n1 * n2;
    alert(`${n1} + ${n2}  = ${resultado}`);
    novaopracao();
}
function divisaoReal(){
    resultado = n1 / n2;
    alert(`${n1} + ${n2}  = ${resultado}`);
    novaopracao();
}
function divisaoInteira(){
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a  ${resultado}`);
    novaopracao();
}
function poteciacao(){
    resultado = n1 ** n2;
    alert(`${n1} elevado a  ${n2} é igual a ${resultado}`);
    novaopracao();
}

function novaopracao(){
    let opcao = prompt("Deseja fazer uma nova operação\n 1 - Sim \n 2 - Não");
    if(opcao == 1){
        calculadora();
    }else if(opcao == 2){
        alert('Até mais')
    }else{
        alert("Digite uma opção válida")
        novaopracao();
    }  
    }
}


    if(operacao == 1) {
        soma();
    }else if(operacao == 2){
        subtracao();
    }else if(operacao == 3){
        multiplicao();
    }else if(operacao == 4){
        divisaoReal();
    }else if(operacao == 5){
        divisaoInteira();
    }else if(operacao == 6){
        poteciacao();
    }
   }
}
calculadora();
