/* FUNÇÔES */

function saudacao () {  /* sempre colocar parenteses e colocar a funçao dela entre chaves */
    console.log("Seja bem vindo")
}

saudacao()        /* para chamar ela é so colocar o nome e parenteses no final */

/* como enviar parametros para funçoes */
console.clear

function saudacao (nome,curso) {  /* sempre colocar parenteses e coloc ar a funçao dela entre chaves, qiando colocar parametro sempre chamar com o paramentro */
    console.log(`Ola ${nome} Seja bem vindo ao curso ${curso}`)
}

saudacao("Paulo", "Ada") /* parametro utilizado meu nome */

console.clear

function soma(n1 , n2){
    return n1 + n2                     /* ela sempre vai encerrar antes do retorno , nao imprime nada depois do retorno */
}

let resultado = soma(10,20)
console.log(resultado/2)

