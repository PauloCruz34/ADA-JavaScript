/* ARRAYS são um tipo de variáveis extrutura de dados são listas  */

// como criar uma lista
let numeros = [1,234567890, 96,"paulo"]; // array com valores separados por vírgula e entre colchetes.
console.log(numeros);

let arr = []  /* lista vazia */ /* separar sempre as variáveis por vírgula, pode comportar diferentes tipos de dados */

/* Acessar os dados  */
console.log("primeiro elemento", numeros[0])
console.log("ultimo elemento", numeros[numeros.length-1]);



/* Tamanho */
console.log('tamanho do vetor', numeros.length)  /* .length conta o numero de itens na lista */

/* Percorrendo com o for */

for(let i = 0; i< numeros.length; i++){
    console.log(numeros[i])
}

for(let elemento of numeros){   /* cada interação vai pegar um elemento da lista  volta elementos*/
    console.log(elemento)
}

for(let i in numeros){    /* percorre os indices da lista  */
    console.log(i)
}

for(let i in numeros){    /* percorre os indices da lista   e volta o valor de cada*/
    console.log(i, numeros[i])
}


