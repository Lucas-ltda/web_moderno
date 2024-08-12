const temFruta = fruta=>{
    switch (fruta) {
        case "Maça":
            return "Não vendemos esta fruta aqui"
        case "Kiwi":
            return "Estamos com escassez de Kiwis"  
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Valor desconhecido ou fruta não reconhecida" 
    }
}

console.log(temFruta("Kiwi"))