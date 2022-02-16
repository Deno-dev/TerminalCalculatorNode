const minimist = require('minimist') //Externo

const soma = require('./soma').soma //Interno
const divisao = require('./divisao').divisao //Interno
const subtracao = require('./subtracao').subtracao //Interno
const multiplicacao = require('./multiplicacao').multiplicacao //Interno

const args = minimist(process.argv.slice(2))

const a = parseInt(args["a"])
const b = parseInt(args["b"])

switch(args["tipo"]){
    case 'subtração': 
        subtracao(a,b)
        break;
    case 'soma':
        soma(a,b)
        break;
    case 'divisao':
        divisao(a,b)
    case 'multiplicação':
        multiplicacao(a,b);
        break;
    default:
        console.log("Ih mané, nenhuma operação selecionada, ai fica dificil amigão")
}