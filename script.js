let segredo = Math.floor(Math.random() * 50) + 1;
let escolha;

while(escolha !== segredo){ // !== diferente
    escolha = Number(prompt("Digite um número:"));
    if(escolha > segredo){
        alert("ERROU! O número era menor. Tente outra vez!")
    }
    else if(escolha < segredo){
        alert("ERROU! O número era maior. Tente outra vez!")
    }
    else{
        alert("ACERTOU!!!")
    }
}
