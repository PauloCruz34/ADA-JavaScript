/* OBJETOS */ 
/* Acessa o elemento atravez de chaves  */

/* Como criar um objeto */

let pessoa = {
    nome: 'José' ,
    idade: 28       /* coloca a chaves o objeto e o nome, se o nome for simple não precisa colocar entre colchetes */
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["nome"]) /* chama-se assim o objeto, atributo.valor ou valor entre colchetes */

/* adicionar um par de chaves */
pessoa.altura = 1,80
console.log(pessoa)

/* remover um par de chaves */

delete pessoa.altura
console.log(pessoa)

/* percorrer */
for (let chave in pessoa){
    console.log(chave)
}