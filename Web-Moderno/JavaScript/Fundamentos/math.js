//Dentro da API do JS, existe um objeto chamado Math.
//O JavaScript nao tem um operador de exponenciação, por exemplo. O Math pode nos ajudar com isso.

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2); //Math.pow(raio, 2) irá fazer a seguinte operação: raio elevado ao quadrado, ou seja: 5.6 ^ 2 
console.log(area);
console.log(area.toFixed(2)); //Lembre-se o toFixed limita a quantidade de casas decimais que serão exibidas, nesse caso 2.

//PI é uma constante dentro de Math que armazena o valor de PI:
const pi = Math.PI;
console.log(pi);

// Como dito acima, Math é um objeto criado na API do JS:
console.log("Math é do tipo: " + typeof Math);