const calcularValor = (valor, mes) =>{
    if(mes >= 1 && mes < 13 ){
        atraso = mes - 1 
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else{
        return "Mes invalido"
    }
}

console.log(calcularValor(100 , 2))