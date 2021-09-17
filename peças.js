var  peso = 100
console.log ("Peso da peça: " + peso)

if ( peso >= 100) {
    console.log("Pode cadastrar")

}
else {
    console.log("Peso insuficiente")
}
console.log("-----------------------")

var caixa = 11
console.log ("lista de peças: "+ caixa)

if (caixa > 10) {
    console.log ("Capacidade insuficiente")

}
console.log("-----------------------")

// Inserir nome das peças

const nomes = ["Procesador","HD","SSD","Monitor"]

if( nomes.length <= 10) {
    console.log("Nome das peças")
}

for (let index = 0; index < nomes.length; index++){
    const atual = nomes[index]
    if (atual.length < 3){

        
        console.log(atual + ": A peça não possui caracteres suficientes.")
    
    }
        else {
        console.log(atual + ": Pode ser cadastrada.")
    }

}
