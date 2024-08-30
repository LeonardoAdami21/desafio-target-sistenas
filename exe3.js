// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

import * as fs from 'fs';

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoData = JSON.parse(data);
    const faturamento = faturamentoData.faturamento;

    // Inicializa variáveis
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    // Processa os dados
    faturamento.forEach(dia => {
        if (dia.valor > 0) {
            // Atualiza menor e maior valores
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;

            // Calcula o total de faturamento e contagem de dias
            totalFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    // Calcula a média mensal
    const mediaMensal = totalFaturamento / diasComFaturamento;

    // Conta quantos dias tiveram faturamento acima da média
    const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaMensal).length;

    // Resultados
    console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});