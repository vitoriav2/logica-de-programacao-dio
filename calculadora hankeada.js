// Leitura das entradas (Vitórias e Derrotas)
const vitorias = parseInt(gets());
const derrotas = parseInt(gets());

// Chamada da função principal
const resultado = calcularNivel(vitorias, derrotas);

// Exibição da mensagem final conforme solicitado
print(resultado);

/**
 * Função que calcula o saldo e determina o nível do jogador
 */
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para determinar o nível baseado nas VITÓRIAS
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
