/* LAÇO CONDICIONAL */

const input = require("readline-sync")

let numero_sorteado = 5;
numero_sorteado = Number(numero_sorteado)
let numero = Number(input.question("Qual numero escolhido? "))

/* if (numero === numro_sorteado){
    console.log("Acertou")
} else{
    console.log("Acertou")
} */

while(numero !== numero_sorteado){       /* enqanto o valor for diferente do numero ele vai se repetir */
    console.log("errou, tente novamete")
    numero = Number(input.question("Tentar de novo: "))
}

console.log("Acertou")



