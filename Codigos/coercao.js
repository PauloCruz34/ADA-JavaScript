/* COERÇÃO (CONVERSÃO) DE TIPOS */

/*  COERÇÃO EXPLICITA(Manual) */

const numero = 10;
console.log(numero, typeof numero)

const numeroEmFormatoString= String(numero)
console.log(numeroEmFormatoString, typeof numeroEmFormatoString)

/* 
parseFloat = converte para numero flutuante
Number= usar sempre no lugar do parseFloat e do parseInt
Boolean = converte par tuue or false sendo que o numero 0 sempre sera falso e diferente de zero é verdadeiro

*/
/* Coersão Implicita (Automática)*/

console.log("10"+1) /* quando um ta em formato de string e outro no formato de numero ele concatena */
console.log("10"-1) /* quando é subtração ele considera tudo como numero */ 
/* só considera str quando é soma */
console.log(10 - "abcd") /* aqui volta NAM not a number  */
