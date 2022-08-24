// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const soma = (x, y) => x+y;

const subtracao = (x, y) =>  x-y;

const multiplicacao  = (x, y) => {return x*y};

const divisao = (x, y) => {return x/y};

const numero1 = +prompt('Insira um número:');
const numero2 = +prompt('Insira um outro número:');

console.log(`As contas básicas dos números digitados são:\n\n
${numero1} + ${numero2} = ${soma(numero1, numero2)}\n
${numero1} - ${numero2} = ${subtracao(numero1, numero2)}\n
${numero1} * ${numero2} = ${multiplicacao(numero1, numero2)}\n
${numero1} / ${numero2} = ${divisao(numero1, numero2)}\n`);