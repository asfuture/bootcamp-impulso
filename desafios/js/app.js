"use strict";
let button = document.getElementById("button");
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let calculo = document.getElementById('calculo');
function adcionarNumeros(num1, num2, devPrint) {
    let resultado = num1 + num2;
    if (devPrint && calculo) {
        calculo.innerHTML = resultado.toString();
    }
    return num1 + num2;
}
let devPrint = true;
if (button) {
    button.addEventListener('click', () => {
        if (num1 && num2) {
            adcionarNumeros(Number(num1.value), Number(num2.value), devPrint);
        }
    });
}
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
const matricula = {
    nome: 'Alex Ferreira',
    code: 10
};
// Como podemos melhorar o esse código usando TS? 
const pessoa = (nome, idade, profissao) => {
    nome = 'Paris',
        idade = 26,
        profissao = "Desenvolvedora";
};
var profissao;
(function (profissao) {
    profissao[profissao["profissao"] = 0] = "profissao";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    profissao[profissao["Padeiro"] = 3] = "Padeiro";
})(profissao || (profissao = {}));
const pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz
};
const pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
const pessoa5 = {
    nome: "Alex Ferreira",
    idade: 33,
    profissao: profissao.Desenvolvedor
};
function listar() {
    console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);
}
listar();
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let total = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        total += soma;
        campoSaldo.innerHTML = total.toString();
        limparValorSaldo();
    }
}
function limparValorSaldo() {
    soma.value = " ";
}
function limparSaldo() {
    if (campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
