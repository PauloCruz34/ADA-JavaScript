/* ESTRUTURA CONDICIONA CONTROLA O FLUXO */

const idade = 17;

if (idade >= 18) {
   console.log("Você é Maior") 
} else{
console.log("Você é menor de idade")
}
console.clear()



// se nota >= 7 and media >= 5 vai pra recuperação  media<5 reprovado
const media = 5

if(media>=7){
    console.log("Aprodo")
} else if(media<7 && media >= 5){
    console.log("em recuperação")
} else{
    console.log("Reprovado")
}



if (50 > 100) {
    console.log("Falta um tanto");
  } else {
    if ("1" == "-1") {
      console.log("Quase lá");    
    }
  
    if (!null) {
      console.log("Sucesso");
    }
  }