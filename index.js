var readline = require('readline-sync');
var n = 0;
var count = 0;
var i = 0;

console.log("Programa que verifica se o numero é primo");
n = parseInt(readline.question("Informe um numero inteiro: "));
//dividir um numero n vezes
for(i=1; i <=n ; i++){
    if(n%i==0){
        count == count++;
    }
}
//decisáo
if (count == 2)
{
    console.log('O numero' + n + "é um numero primo");
}
else {
    console.log("o numero n náo é um numero primo");
}
