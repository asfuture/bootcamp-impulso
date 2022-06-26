
/*
var vou = false;
console.log(typeof(vou));

var number = 11;
console.log(typeof(number));

var name = "alex";
console.log(typeof(name));

var tipo = 2 ;
console.log(tipo);

let nome = "Ferreira";
nome = "ferreira santos";
console.log(nome);

const sobrenome  = "Alex Ferreira";
console.log(sobrenome);


var escopoGlobal = "global";

console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}
escopoLocal();



// var atrinuicao = " Alex Ferreira";
// var comparacao = "0" == 0;
// console.log(comparacao);

// var comparacaoIdentica = "0" === 0;
// console.log(comparacaoIdentica);

var adicao = 2 + 1;
console.log(adicao);

var subtrair = 2 - 1;
console.log(subtrair);

var multiplicar = 2 * 5;
console.log(multiplicar);

var divisaoReal = 24 / 2;
console.log(divisaoReal);

var divisaoInteira = 24 % 5;
console.log(divisaoInteira );

var potenciacao = 2 ** 10;
console.log(potenciacao );


var maiorque = 5 > 2;
console.log(maiorque );

var menoque = 5 < 2;
console.log(menoque );

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual );

var menorOuIgual = 5 <= 2;
console.log(maiorOuIgual );

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);


let array= ['string', 1, true];
console.log(array);


let array= ['string', 1, true,['array0'],['array1'],['array2'],['array3']];
//console.log(array[3]);
//array.forEach(function(item,index){console.log(item, index)});
//array.push(2);
//array.pop()
//array.shift();
//array.unshift('novo item no inicio')
//array.indexOf()
//array.splice(0,3);
 let novoArray =  array.slice(0,3)
console.log(novoArray);


let object = {string:'string',number:1,boolean:true,array:["array"], objectInterno:"objeto interno",string:"string"};
console.log(object.string);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string,boolean,objectInterno} = object;
    console.log(string,boolean,objectInterno);

var jogador1 = 0;
var jogador2 = 0;
var placar;
jogador1 != -1 && jogador2 != -1? console.log("Os jogadores são validos."):console.log("Os Invalidos.");
//if( jogador1 != -1){

    if(jogador1 > 0 && jogador2 ==  0){
        console.log(" Jogador1 marcou ponto!");
        placar = jogador1 > jogador2;
    }else if(jogador2 > 0 && jogador1 ==  0){
        console.log(" Jogador2 marcou ponto!");
        placar = jogador2 > jogador1;
    
    }else{
        console.log(" Ninguém marcou ponto!");
    }
//}

// 
switch(placar){
    case placar  =jogador1 > jogador2:
    console.log(" switch :Jogador 1 marcou.");
    break;
    case placar  = jogador2 > jogador1:
    console.log("switch: Jogador 2 marcou.");
    break;
    default:
        console.log("switch: Ninguém ganhou");
}

let array = ["valor 1","valor 2","valor 3","valor 4","valor 5",]
let object = {propriedade:"valor 1", propriedade2:"valor 2", propriedad3:"valor 3" }

// for - executa uma instrução até que ela seja falsa
for(var indice = 0;indice <array.length; indice++){
    console.log("for",indice);
}

// for/in executa repetição a partir de uma propriedade com array
for(let i in array){
console.log("for/in",i)
}

// com array
for(i in object){
    console.log("Objeto:",i)
    }


//for/of - executa repetição a partir do valor com array
for(i of array){
     console.log("for/of:",i)
 }
// com object
for(i of object.propriedade){
    console.log("com object não funciona",i);
}


// while
//var a = 0;
// while(a < 10){
//     a++
//     console.log("while:",a);
// }

// DO while
// do {
//     a++;
//     console.log("Do while:",a);
// }while (a < 10);
function nome(){
    console.log("alex ferreira/ função");
}
nome();
function mensagem(a,b){
    console.log(a,b);
}
mensagem("Estou quase lá!"," Foco, Forco e Fé");

var funcao = function(){
    console.log("Sou uma mensagem de função de expressão");
}
funcao();


var funcao = () =>{
    console.log("Sou uma arrow function");
}
funcao();
*/
