// par nome/valor 

const saudacao = 'Opa'

function exec(){
    const saudacao = "Falaa"
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 20,
    peso: 90,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec())
console.log(cliente)