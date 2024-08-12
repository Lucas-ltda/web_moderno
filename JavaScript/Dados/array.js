const valores = [7.7,8.9,6.3,9.2]// array
console.log(valores[2], valores [3])// ver o valor de um array de acordo com o index dentro dos []

// adicionar um novo valor ao array
console.log("=========================================")
valores [4] = 10
console.log (valores)
console.log(valores.length)// revela a quantidade de index no array

valores.push({id:3}, false, null, 'novo')// adicionar um novo valor ao array .push()
console.log(valores)
console.log(valores.length)

//tirar valores de um array
console.log("=======================")
// method .pop() retira o index do array
console.log(valores.pop())
console.log(valores)
console.log("=======================")
delete valores [3]
console.log(valores) // remover valores (index)