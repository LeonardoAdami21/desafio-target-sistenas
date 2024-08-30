// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
 
/**
 * Calculates the percentage of a given value in relation to a total value.
 *
 * @param {number} faturamento - The value to calculate the percentage for.
 * @param {number} totalFaturamento - The total value used as a reference.
 * @return {number} The calculated percentage.
 */
function calculaPercentual(faturamento, totalFaturamento) {
    return (faturamento / totalFaturamento) * 100;
}

const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

const totalFaturamento = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

const percentualSP = calculaPercentual(faturamentoSP, totalFaturamento);
const percentualRJ = calculaPercentual(faturamentoRJ, totalFaturamento);
const percentualMG = calculaPercentual(faturamentoMG, totalFaturamento);
const percentualES = calculaPercentual(faturamentoES, totalFaturamento);
const percentualOutros = calculaPercentual(faturamentoOutros, totalFaturamento);

console.log(`Total faturado: R$${totalFaturamento.toFixed(2)}`);
console.log(`Percentual SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual Outros: ${percentualOutros.toFixed(2)}%`);
