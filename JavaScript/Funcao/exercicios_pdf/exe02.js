//equilatero -> todos os lado iguais a = b = c 
//isosceles -> dois lados iguais
//Escaleno -> todos os lados diferentes a != b != c

const triangulo = (lado_a,lado_b,lado_c) =>{
    if (lado_a != lado_b && lado_b != lado_c && lado_c != lado_a) {
        console.log("Triangulo Escaleno")
    } else if(lado_a == lado_b && lado_b == lado_c &&  lado_c == lado_a) {
        console.log("Triangulo Equilatero ")
    }else{
        console.log("Triangulo isosceles ")
    }
}

console.log(triangulo(2,2,2))