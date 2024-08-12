const numeroExtenso = numero =>{
    switch (numero) {
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"   
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"    
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Novo"
        case 10:
            return "Dez"    
        default:
            return "Numero não incluso no intervalo( 1 - 10)"
    }
}

console.log(numeroExtenso(8))