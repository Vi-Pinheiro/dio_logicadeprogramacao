// Variáveis.
let nomeHeroi = "Vinicin"
let quantidadeXp = 6541
let nivelHeroi = ""

// Operadores / Estruturas condicionais If e Else / Estruturas de condição.

if(quantidadeXp >= 0 && quantidadeXp <= 1000){
    nivelHeroi = "ferro"

} else if (quantidadeXp >= 1001 && quantidadeXp <= 2000){
    nivelHeroi = "bronze"

} else if (quantidadeXp >= 2001 && quantidadeXp <= 5000){
    nivelHeroi = "prata"

} else if (quantidadeXp >= 5001 && quantidadeXp <= 7000){
    nivelHeroi = "ouro"

} else if (quantidadeXp >= 7001 && quantidadeXp <= 8000){
    nivelHeroi = "platina"

} else if (quantidadeXp >= 8001 && quantidadeXp <= 9000){
    nivelHeroi = "ascendente"

} else if (quantidadeXp >= 9001 && quantidadeXp <= 10000){
    nivelHeroi = "imortal"

} else{
    nivelHeroi = "radiante"
}

// Saída.
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi +".")

// OBS: Não consegui utilizar laço de repetição.





