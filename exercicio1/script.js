// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function hello (nome) {
//     console.log(`Olá, ${nome}!`);
// };

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada (x) {
//     for (let i = 0; i <= 10; i++) {
//         const novaTabuada = x*i
//         console.log(`${x} x ${i} = ${novaTabuada}`);
//     }
// };

// tabuada (8);

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const hello = (nome) => console.log(`Olá, ${nome}!`);

hello ("Bruno");


const tabuada = (x) => {
    for (let i = 0; i <= 10; i++) {
        const novaTabuada = x*i
        console.log(`${x} x ${i} = ${novaTabuada}`);
    }    
 };

tabuada (4);