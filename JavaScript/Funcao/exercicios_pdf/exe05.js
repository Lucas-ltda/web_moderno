const converter = valorDecimal =>{
    const valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".",",")}`
    //toFixed(2) -> Limitar as casas decimais em 2
    //toString() -> Converter para string para poder usar o replace

    //replace() -> para substituir o ponto "." pela virgula ","

    console.log(valorEmReais)
    }

    converter(0.2)
    converter(0.5 + 0.6)