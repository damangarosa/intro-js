/**
 * Recebe um vetor de números e retorna o menor elemento do vetor. 
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array} vetor 
 * @return {Number} o menor valor.
 */
function acharMenor(vetor) {
    if (vetor.length === 0) return undefined
   
    var menor = Infinity;
    vetor.forEach((n) => {
        if (n < menor) {
            menor = n
        }
    });
    return menor;

 }

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array} vetor com números inteiros.
 * @returns {Array} vetor contendo apenas números pares do original (ou vazio se não houver nenhum)
 */
function acharPares(vetor) { 
    var pares = []
    vetor.forEach((n) => {
        if (n % 2 === 0) {
            pares.push(n)
        }
    });
    return pares;
}