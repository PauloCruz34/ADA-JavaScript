/* USO DO FOR */



const input =  require("readline-sync")

/* 
O problema:
Pegar a médias de notas de 3 alunos
*/

// Acumulador é uma variável que coloca pra ir acumulando numero ex: acumulador = acumulador +1 vai acumulando valor

let acumulador = 10
acumulador += 10   /* acumulador = acumulador + 10 */
acumulador += 2
acumulador ++ /* aqui essa sitaxi soma 1 automaticamente na variavel */
console.log(acumulador)

/* FOR */
for(let i = 0; i < 10; i++){   /* enquanto i for menor que 10 ira somar 1 unidade na variavel começando do 0 */
    console.log("repetição",i)
}


/* Calculankdo a media de notas */
let nota;
let soma = 0

for(let i = 1; i<3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno`)) /* colocar a crase para str e coloca $  e entre chaves coloca uma variável, ele à chama */
    soma = soma + nota  

}
console.log(`A media do aluno é ${soma/3}`)