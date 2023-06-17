/* Operadores Aritméticos */


let num_1 = 30; /* posso escrever a variável sempre com letra minúscula no  começo */
let num_2 = 60

console.log("Soma = ", num_1 + num_2);   /* + - / ** % */
console.log("subtração", num_1 - num_2)
console.log("multiplicação", num_1 * num_2)
console.log("Divisão", num_1 / num_2)
console.log("Exponenciação", num_1 ** num_2)
console.log("Resto da divisão", num_1 % num_2)


/* Precedencia é a ordem das operçãoes, primeiro o parenteses mais interno e depois e assim sucessivamente */
console.log((30+25)*(3*(25-6)))

console.log(Math.PI)    /* Math traz funções matemáticas */
console.log(Math.sqrt(16))  /* volta a raiz quadrada */

/* pesquisar java script no MDM lá volta todas as propriedades de cada função dentro da biblioteca */


/* Operadores booleanos */

/* como resultado vai trazer verdadeiro ou falso, são comparações */

/*
 == igualdade compara o valor da variavel indpendente do tipo
=== igualdade compara o valor e o tipo da varivel
!= desigualdade compara o valor da variável independente do tipo
!== desigualdade compara tipo e valor
>= maior igula
<= menor igual
< maior que
> menor que
*/

const numero = 10
console.log(numero>20)
console.log(numero == 10)
console.log(numero == "10") /* == compara conteudo */
console.log(numero==="10") /* === compara o tipo de variavel, sempre usar esses === para evitar bug nos codigos */


/* Conjuções Lógicas */

/* 
AND = &&
OR = ||
Not = !
 */

let idade = 26
let tenhoCnh = true
const possoDirigir = idade>= 18 && tenhoCnh === true
console.log('Possomdirigir:', possoDirigir)

idade = 40
const votoFacultativo = idade <18 || idade >=70
console.log(votoFacultativo)

console.log(!votoFacultativo) /* ! é negação */



