/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas) 
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado, não faça nada.
 * Exemplos:
 *  - Yuri Dirickson -> Yuri D.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 * 
 * @param {String} nomeCompleto nome completo da pessoa.
 * @return string com o segundo nome abreviado
 */
function abreviadorNomes(nomeCompleto) {
    if(nomeCompleto.split(' ').length > 1){
        return nomeCompleto.split(' ')[0] + ' ' +nomeCompleto.split(' ')[1].substring(0,1) +'.'
    }else{
        return nomeCompleto
    }
 }

/**
 * Escreva uma função que recebe uma String com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Mês Extenso de Ano'. 
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 * OBS: Note a letra maiúscula do mês.
 * 
 * @param {String} data 
 * @returns {String} data no formato 
 */
function converteDataParaFormaCompleta(data){
  
    var [dia, mes, ano] = data.split('/') 
    switch(mes){
        case'02':
            mes = 'Fevereiro'
            break;
        case '05':
            mes = 'Maio'
            break;
        case '11':
            mes ='Novembro'
            break;
        default:
            return null;
    }
    



    return dia + ' de ' + mes + ' de ' + ano
 }