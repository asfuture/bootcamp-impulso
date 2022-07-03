//########################################################################
// Atividade 0 calculando dois numeros 
let button = document.getElementById("button");
let num1 = document.getElementById('num1') as HTMLInputElement;
let num2 = document.getElementById('num2')  as HTMLInputElement;
let calculo = document.getElementById('calculo');


function adcionarNumeros(num1:number, num2:number,devPrint:boolean){
    let resultado = num1 + num2;
    if(devPrint && calculo){
        
        calculo.innerHTML =  resultado.toString();
    }
    return num1 + num2;
}

let devPrint = true;

if(button){
    button.addEventListener('click', () =>{
        if(num1 && num2){
          adcionarNumeros(Number(num1.value), Number(num2.value), devPrint)
        
        }
    })
}






//########################################################################
//ATIVIDADE 1 Como podemos rodar isso em um arquivo .ts sem causar erros? 
let btndesafio = document.getElementById('btndesafio1');


function desafio(){
    const matricula = {
        nome:'Alex Ferreira',
        code:10
    }
   alert(matricula.nome+", "+ matricula.code);
}

if(btndesafio){
   btndesafio.addEventListener('click',()=>{
    desafio();
   })
}






//########################################################################
// ATIVIDADE 2 Como podemos melhorar o esse código usando TS? 
const pessoa = (nome:string, idade:number, profissao:string) => {
    nome = 'Paris',
    idade = 26,
    profissao = "Desenvolvedora"
}

enum profissao {
    profissao,
    Atriz,
    Desenvolvedor,
    Padeiro,
}
interface pessoa {
    nome:string,
    idade:number,
    profissao:profissao
}
const pessoa1: pessoa = {
    nome : "maria",
    idade : 29,
    profissao:profissao.Atriz
}

const pessoa2:pessoa = {
    nome:"roberto",
    idade:19,
    profissao:profissao.Padeiro
}
const pessoa3:pessoa = {
    nome: "laura",
    idade: 32,
    profissao:profissao.Atriz
}

const pessoa4:pessoa = {
    nome:"carlos",
    idade: 19,
    profissao:profissao.Padeiro
}
const pessoa5:pessoa = {
    nome:"Alex Ferreira",
    idade: 33,
    profissao:profissao.Desenvolvedor
}
let respotaDesafio2 = document.getElementById('respotaDesafio2');
function listar(){
        console.log(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5);
        alert(pessoa1.nome+" " +pessoa2.nome+" " +pessoa3.nome+" " +pessoa4.nome+" " +pessoa5.nome);
}
if(respotaDesafio2){
    respotaDesafio2.addEventListener('click',()=>{
    listar();
    })
 }






//##########################################################################################
//ATIVIDADE 3 O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let total = 0

function somarAoSaldo(soma:number) {
  if(campoSaldo){
    total += soma;
    campoSaldo.innerHTML =total.toString();
    limparValorSaldo();
    } 
}

function limparValorSaldo() {
    soma.value = " ";
}

function limparSaldo(){
    if(campoSaldo){
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', () => {
       limparSaldo();
    });
}

