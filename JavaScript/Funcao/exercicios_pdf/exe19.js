const lanche = (codigoDoProduto, quantidade)=>{
    switch (codigoDoProduto) {
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4        
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8              
        default:
            return "Codigo não reconhecido"
    }

}

console.log(lanche(100, 5))
console.log(lanche(200, 4))
console.log(lanche(300, 5))