// Atividade 1 Solução 01
 function verificarPalindromo(string){
    if(!string) return "string inexistente";
  return  string.split("").reverse().join("") === string;
 }
 let mycar = false;
 console.log(verificarPalindromo("ama"),"Palindromo solução 01");


// Atividade 1 Solução 02
function verificarPalindromo2(string){
    if(!string) return " String inexistente";
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
            return false;
        }
    }
    return true;
}
console.log(verificarPalindromo2("gato"),"Palindromo solução 02");




