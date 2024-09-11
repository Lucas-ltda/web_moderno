//cadeia de prototipos
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1);

// o conceito de herança em JS está ligado ao consceiro de prototipo.
// prototipo seria o objeto "pai" de um objeto.
// pra ficar mais facil. No exemplo acima, o avo é prototipo de pai e filho pq é referenciado pela propriedade "proto" como prototipo do obj pai, que por sua vez é prototipo do obj filho. 
// muitos prototipos foram ditos