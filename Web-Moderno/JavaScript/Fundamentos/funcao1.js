// Funcao sem retorno
function imprimirSoma(num1,num2){

    console.log(num1 + num2);

};

imprimirSoma(50,50);

imprimirSoma(50); //tentou somar um inteiro com um undefined. Logo NaN

imprimirSoma(50,2,10,15,20);

// Funcao com retorno

function soma(a, b = 0){ //por padrão a veriável b é 0 quando esse valor nao for informado na chamada da função
    return a + b
}
console.log(soma(2,3))

teste = soma(10,3);
console.log(teste);

console.log(soma(2)); // somou 2 com 0, que foi o valor padrão setado acima na declaração.


function teste2(c = " Defina um valor para c ", d = " Defina uma valor para d "){
    return c + d
}

console.log(teste2(100));

