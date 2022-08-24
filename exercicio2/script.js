// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const soma = (x, y) => {
    const somando = x + y
    console.log(somando);
}

soma (2, 5);

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const maiorOuIgual = (x, y) => {
    const booleano = x >= y
    console.log(booleano);
}

maiorOuIgual (7, 6);

// c) Uma função que receba um número e imprima se ele é par ou não

const parOuImpar = (x) => {
    if (x % 2 === 0) {
        console.log(`O número ${x} é par!`);
    } else {
        console.log(`O número ${x} é impar!`);
    }
};

parOuImpar (20)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const mensagem = (mensagemString) => {
    console.log(`Este mensagem tem ${mensagemString.length} caracteres!`);
    console.log(`Sua mensagem foi: ${mensagemString.toUpperCase()}`);
}

mensagem ('Deus nos ama!')