const readline = require('readline');

const rl = readline.createInterface ({
    input:process.stdin,
    output:process.stout
});

var nome1="";

// let nome=prompt("Digite seu nome: ");
// let idade=prompt("Digite sua idade: ");
// var salario=prompt("Salario: R$ ")

rl.question('Digite seu nome: ',(nome) => {
    console.log(`Olá, ${nome}!`);

    rl.close();
})


//Template string
console.log(`Nome=${nome1}`)
