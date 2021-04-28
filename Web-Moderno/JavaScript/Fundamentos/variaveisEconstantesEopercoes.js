//Declaração de variáveis
var a = 3;
console.log(a);

let b = 10; //É melhor declarar uma variável utilizando o let do que var.
console.log(b);

const c = 1000;
console.log(c);

let flins = "Flinston Flim"
console.log("A variavel flins cuja o valor é: " + flins + " É do tipo: " + typeof flins)


console.log("FIM BLOCO 'DECLARAÇÃO DE VARIÁVEIS'");



//------------------------------------------------------------------------------

//Tipagem Fraca

let qualquer = "Qualquer coisa";
console.log(qualquer);
console.log(typeof qualquer); //typeof exibibe qual é o tipo da variável.

qualquer = 1000; //A variável qualquer foi criada sendo do tipo String. Porém, em JS podemos reescrever o valor da variável, mudando seu tipo!!
console.log(qualquer);
console.log(typeof qualquer);
console.log("FIM BLOCO 'TIPAGEM FRACA'");

//Evitar nomes genéricos e siglas.

//--------------------------------------------------------------------------------

// Tipo Number (Númerico)

const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(1,2);
console.log(Number.isInteger(peso1)); //Mesma coisa que perguntar peso1 é inteiro?(True)
console.log(Number.isInteger(peso2)); 

const avaliacao1 = 9.789;
const avaliacao2 = 8.9981;
console.log(Number.isInteger(avaliacao1)); //Mesma coisa que perguntar peso1 é inteiro?(False)
console.log(Number.isInteger(avaliacao2));
console.log(typeof avaliacao1, typeof avaliacao2);
console.log(avaliacao1, avaliacao2);

/*Beleza, temos constantes que armazenam o peso "peso1 e peso2"
*E temos também constantes que armazenar o resultado de 2 avaliações "avaliacao1 e avaliacao2"
*
*Imagine o cenário escolar aonde a avaliação 1, tem peso 1 na média e,
*a avaliação 2 tem peso 2 na média.
*Qual é a média final deste aluno?
*/
//Lógica 1 
//const totalNota = avaliacao1 * peso1 + avaliacao2 * peso2;
//const notaFinal = totalNota / (peso1 + peso2);
//console.log(notaFinal);

//Lógica 2
const notaFinal = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1 + peso2);
console.log(notaFinal); // Note que a saída imprime várias casas decimais.

console.log(notaFinal.toFixed(2)); // dessa forma limitamos a quantidade a ser exibida de casas decimais em 2

console.log(notaFinal.toString()); //Imprimir o valor da const notaFinal como string. Somente imprime, não altera o tipo da variável
console.log(typeof notaFinal);

console.log(notaFinal.toString(2)) //imprime o valor em string binária;
console.log("FINAL DO 'BLOCO TIPO NUMBER'")

//---------------------------------------------------------------------------------
//Alguns cuidados com Number

console.log(7 / 0); //Qualquer número divido por 0, retorna Infinity

console.log("10" / 2); //JS faz operações aritimeticas entre uma string(cuja o conteúdo seja número)e um Number;

console.log ("Blz" / 2); //retorna NaN pois não faz a operação entre uma string(cuja o conteúdo não seja número) e um Number



