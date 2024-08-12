const calcularFatorial = numero =>{
    if (numero == 0) {
        return 1
    }else if (numero < 0 ) {
        return -1
    }else{
        return numero * calcularFatorial(numero - 1)
        //apesar de confuso, essa linha vai fazer varias chamadas pra poder fazer o calculo do fatorial. 
    }
}

console.log(calcularFatorial(5))