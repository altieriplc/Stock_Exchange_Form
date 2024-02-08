import { papeis } from "./stock_exchange_form_array.mjs"//importando array


let papeisEsc = document.querySelector("#papeis")//variável para capturar select
let valorDigitado = document.querySelector('#precoAtivoId')//variável para capturar input

valorDigitado.addEventListener("input", function() {// Adiciona um ouvinte de evento para o ("input") no elemento de ID "valorDigitado"

    let novoValor = parseFloat(valorDigitado.value);// Converte o valor do  "valorDigitado" para um número decimal

    function addValue(novoValor){// Define a função "addValue" para adicionar um valor aos elementos do array "papeis"
        if(novoValor === 0){
            return "Preencha um valor"
        }else if(!isNaN(parseFloat(novoValor)) && isFinite(novoValor)){// Verifica se o novo valor é um número válido e finito
            for(let i = 0; i < papeis.length; i++){// Itera sobre cada elemento do array "papeis" e define o valor para o novo valor fornecido
                papeis[i].valor = novoValor
            }
        } else{
            console.log('Informe apenas numero')
        }
        
    };
    
    addValue(novoValor);// Chama a função "addValue" passando o novo valor como argumento
});


//----------------IMPRESSÃO DO ÍNDICE ESCOLHIDO DO ARRAY NO CONSOLE------------------------------------

papeisEsc.addEventListener("change", function(){//função de "change para select"
    let selectedIndex = papeisEsc.selectedIndex;//selectedIndex é uma propriedade dos elementos <select> em JavaScript. Ela retorna o  índice do elemento selecionado dentro do elemento <select>
    let papelSelecionado = papeis[selectedIndex];
    console.log(papelSelecionado);
});

//-----------------------------------------------------------------------------------------------------


export {papeis}



















































// // let somaCompra = document.getElementById('precoAtivoId')
// // let valorAnterior = 0

// // somaCompra.addEventListener('input',function(){
// //     somaCompra++
// //     console.log(somaCompra);

// //     let valorAtual = parseFloat(somaCompra.value) || 0;

// //     let soma = valorAnterior + valorAtual

// //     valorAnterior = soma

// //     console.log("Soma dos valores informados: " + soma);
// // })
// document.addEventListener('DOMContentLoaded', function () {
//     // Aguarde até que o DOM esteja completamente carregado

//     var form = document.querySelector('form');//pega o formulario todo, pois todo o código está
//                                             //dentro dele
//     var precoAtivoInput = document.getElementById('precoAtivoId');//variavel que acessa o input
//     var somaTotal = 0;

//     form.addEventListener('submit', function (event) {
//         // Impede o envio padrão do formulário para evitar o recarregamento da página
//         event.preventDefault();

//         // Obtém o valor atual do campo e converte para número
//         var valorAtual = parseFloat(precoAtivoInput.value) || 0;

//         // Soma ao total acumulado
//         somaTotal += valorAtual;

//         // Exibe a soma no console (você pode ajustar isso conforme necessário)
//         console.log("Soma total dos valores informados: " + somaTotal);

//         // Limpa o campo para a próxima entrada
//         precoAtivoInput.value = '';
//     });

// });
