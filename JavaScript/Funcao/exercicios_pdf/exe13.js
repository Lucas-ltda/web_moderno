const diaDaSemana = dia => {
    switch (dia) {
        case 1:
            console.log("Domingo")
            console.log("Dia não util")
            break;
        case 2:
            console.log("Segunda")
            console.log("Dia Util")
            break;

        case 3:
            console.log("Terça")
            console.log("Dia Util")
            break;
            
        case 4:
            console.log("Quarta")
            console.log("Dia Util")
            break;

        case 5:
            console.log("Quinta")
            console.log("Dia Util")
            break;

        case 6:
            console.log("Sexta")
            console.log("Dia Util")
            break;
         
        case 7:
            console.log("Sabado")
            console.log("Dia não util")
            break; 

        default:
            console.log("Valor invalido")
            break;
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(2));
console.log(diaDaSemana(3));
console.log(diaDaSemana(4));
console.log(diaDaSemana(5));
console.log(diaDaSemana(6));
console.log(diaDaSemana(7));
console.log(diaDaSemana('a'));


console.log("================================================")



const diasDaSemana = dia => {
    switch (dia) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default:
           return"Dia inválido"
    }
}



console.log(diasDaSemana(1));
console.log(diasDaSemana(2));
console.log(diasDaSemana(3));
console.log(diasDaSemana(4));
console.log(diasDaSemana(5));
console.log(diasDaSemana(6));
console.log(diasDaSemana(7));
console.log(diasDaSemana('a'));