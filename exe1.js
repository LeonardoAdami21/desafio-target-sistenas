/* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

let i = 13, soma = 0, k = 0;


/**
 * Calculates the sum of numbers from 1 to i.
 *
 * @param {number} i - The upper limit of the sum (defined outside the function).
 * @return {undefined} The function does not return a value, it logs the sum to the console.
 */
function  processamento() {
    let k = 0;
    while (k < i) {
        k = k + 1;
        soma = soma + k;
    }
    console.log(soma);
}
processamento()