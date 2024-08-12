const operacoes = (a, b) => {
  //arrow function
  console.log(`
        A soma dos parametros é: ${a + b}
        A diferença entre os parametros é: ${a - b}
        A multiplicação entre os dois parametros é: ${a * b}
        A divisão entre os parametros é: ${a / b}`);
};

console.log(operacoes(10, 5));
