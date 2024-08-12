
const avaliarNota = (nota) =>{
    let notaCorrigida = arrendondar(nota)
    if (notaCorrigida < 40) {
        return `reprovado nota: ${notaCorrigida}`
    }   else{
        return `Aprovado nota: ${notaCorrigida}`
    }
}

const arrendondar = nota =>{
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(avaliarNota(100))
console.log(avaliarNota(30))
console.log(avaliarNota(38))
console.log(avaliarNota(88))
console.log(avaliarNota(61))
