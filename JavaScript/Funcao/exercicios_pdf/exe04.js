const divisao = (dividendo, divisor ) =>{
    const resultado =  dividendo / divisor
    const resto = dividendo % divisor

    console.log(`
        Dividendo:${resultado}
        Divisor:${resto}
        `)
}

console.log(divisao(8,2))