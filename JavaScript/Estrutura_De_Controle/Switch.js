let key = 2



switch (key) {
    case 1:
        console.log(`${key} valor de key`)
        break;
        
    case 2:
        key++;
        console.log(`O novo valor de key é: ${key}`)
        break;

    default:
        console.log('Valor Padrão')
        break;
}