"use strict";
console.log("Olá, Mundo!");
let nome = "Alex Ferreira";
let button = document.getElementById("button");
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
function adcionarNumeros(num1, num2, devPrint, frase) {
    let resultado = num1 + num2;
    if (devPrint) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
let devPrint = true;
let frase = "O valor é:";
if (button) {
    button.addEventListener('click', () => {
        if (num1 && num2) {
            console.log(adcionarNumeros(Number(num1.value), Number(num2.value), devPrint, frase));
        }
    });
}
const pessoa = {
    nome: " Marian",
    idade: 25,
    profissao: "Desenvolvedora"
};
pessoa.idade = 25;
const people = (nome, idade, profissao) => {
    nome = 'Paris',
        idade = 26,
        profissao = "Desenvolvedora";
};
var profissao;
(function (profissao) {
    profissao[profissao["profissao"] = 0] = "profissao";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(profissao || (profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 27,
    profissao: profissao.Desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 27,
    profissao: profissao.Desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 65,
    profissao: profissao.Desenvolvedora,
    materias: ["Matematica, Português"]
};
function listar(list) {
    for (const item of list) {
        console.log('. ', item);
    }
}
listar(jessica.materias);
function somaValores(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return num1.toString() + num2.toString();
    }
    else {
        return num1 + num2;
    }
}
console.log(somaValores(1, 5));
console.log(somaValores('else, ', 'Olá, tudo bem?'));
console.log(somaValores("1", 5));
let anyEstadoVolta;
anyEstadoVolta = 3;
anyEstadoVolta = 'teste';
anyEstadoVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstadoVolta;
let unknowValor;
unknowValor = 3,
    unknowValor = 'que';
unknowValor = true;
unknowValor = 'vai sim';
let stringTest2 = 'agora vai';
//stringTest2 = unknowValor;
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
