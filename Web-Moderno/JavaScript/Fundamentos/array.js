// Array = Vetor.

//Array é uma estrutura para se armazenar diversos valores em uma linha linear.

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;

console.log(valores);

//valores[10] = 10; 
//console.log(valores)

console.log(valores.length);


valores.push({id:3}, false, null, 'teste'); //podemos ter um array que armazena diversos tipos de dados. Não é uma boa prática mas é possivel
console.log(valores);

console.log(valores.pop()); //Pop removeu o ultimo valor inserido no array, que neste caso era 'teste'


delete valores[0]; //deleta o valor que estiver dentro do indice informado. Neste caso [0]
console.log(valores);

console.log(typeof valores);



