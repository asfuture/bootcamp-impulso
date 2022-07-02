console.log("Olá, Mundo!");

let nome :string = "Alex Ferreira";

let button = document.getElementById("button");
let num1 = document.getElementById('num1') as HTMLInputElement;
let num2 = document.getElementById('num2')  as HTMLInputElement;

function adcionarNumeros(num1:number, num2:number,devPrint:boolean, frase:string){
    let resultado = num1 + num2;
    if(devPrint){
        console.log(frase + resultado)
    }
    return num1 + num2;
}

let devPrint = true;
let frase = "O valor é:"

if(button){
    button.addEventListener('click', () =>{
        if(num1 && num2){
          console.log(adcionarNumeros(Number(num1.value), Number(num2.value), devPrint,frase))
        }
    })
}

const pessoa = {
    nome:" Marian",
    idade: 25,
    profissao:"Desenvolvedora"
}
pessoa.idade=25;

const people = (nome:string, idade:number, profissao:string) => {
    nome = 'Paris',
    idade = 26,
    profissao = "Desenvolvedora"
}

enum profissao {
    profissao,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface pessoa {
    nome:string,
    idade:number,
    profissao:profissao
}

interface Estudante extends pessoa{
    materias:string[]
}

const vanessa: pessoa = {
    nome:"Vanessa",
    idade:27,
    profissao:profissao.Desenvolvedora
}
const maria: pessoa = {
    nome:"Maria",
    idade:27,
    profissao:profissao.Desenvolvedora
}

const jessica:Estudante = {
    nome:"Jessica",
    idade:65,
    profissao:profissao.Desenvolvedora,
    materias:["Matematica, Português"]
}
function listar(list:string[]){
    for(const item of list){
        console.log('. ',item);
        
    }
}
listar(jessica.materias);
