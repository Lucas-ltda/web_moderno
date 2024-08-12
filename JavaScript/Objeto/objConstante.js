// apesar de serem declarados com a palavra chave const , obejtos não são constantes sem metodos/funções para faze-los constantes de fato. 
//Segue o exemplo

const pessoa = {nome: 'João'}
pessoa.nome ='Pedro'
console.log(pessoa)

// executando esse codigo, mesmo o objeto sendo declarado com João, é possivel fazer a alteração mesmo sendo declarado como "constante".

pessoa = {nome:'Ana'}
//console.log(pessoa)
// Se executado, essa parte do codigo vai dar erro constando pessoa como uma constante. então o que é realmente constante é o endereço de memoria apontado e não o conteudo do objetoconsole.log(pessoa)
