let segredo = 47;
let escolha;

while(escolha !== segredo){ // !== diferente
    escolha = Number(prompt("Digite um número:"));
    if(escolha > segredo){
        console.log("ERROU! O número era menor. Tente outra vez!")
    }
    else if(escolha < segredo){
        console.log("ERROU! O número era maior. Tente outra vez!")
    }
    else{
        console.log("ACERTOU!!!")
    }
}
