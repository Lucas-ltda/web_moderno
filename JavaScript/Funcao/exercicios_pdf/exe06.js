const jurosSimples = (capitalInicial, taxaJuros,tempoAplicacao) =>{
    const juros =  capitalInicial * taxaJuros * tempoAplicacao
    return `R$ ${juros}`
}

const jurosCompostos = (capitalInicial, taxaJuros,tempoAplicacao )=>{
    const montante = capitalInicial *(1 + taxaJuros) ** tempoAplicacao
    return `R$ ${montante.toFixed(2).replace(".",",")}`
}

console.log(jurosSimples(5000,0.01,12))
console.log(jurosCompostos(5000,0.01,12))