/* Métodos Arrays */
const arr1 = [1,3,5,7,9,11]
const arr2 = []

console.log(arr1.slice(0,1))   /* fatia a lista , o indice nao inclui o ultimo indice digitado*/

console.log("antes ", arr2)
arr2.push(10,23) /* acrescenta um elemento à lista no final */
console.log("depois ", arr2)

console.log("antes ", arr2)
arr2.unshift(10,23) /* acrescenta um elemento à lista no começo */
console.log("depois ", arr2)
//Método de remoção do array
arr.pop() /* remove o ultimo elemento removido */
arr.shift()  /*remove o primeiro elemento da lista */

/* concatenação de listas */
console.log(arr1.concat(arr2))

/* Buscando elementos indexOf | leastIndexOf */

let indiceElemento11 = arr1.indexOf(11)
console.log(indiceElemento11)   /* retorna o inkdice o elemto selecionado, se nao for encotrado por padrão irá voltar -1 */
/* se tiver 2 elementos repetidos ele volta o valor de indice do primeiro */
let indexElementoMenorQue3 = arr1.lastIndexOf(3) 
console.log(indiceElemento3) /* volta o último indice quando se tem valores repetidos */


/* saber se o elemento está ou nao na lista */

console.log(arr1)
console.log(arr1.includes(10)) /* a lista 1 inclui o elemento 10? */

/* invertendo lista */
console.log(arr1)
console.log(arr1.reverse())   /* .reverse inverte a lista */