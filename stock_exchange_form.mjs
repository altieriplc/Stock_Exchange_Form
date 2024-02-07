import { papeis } from "./stock_exchange_form_array.mjs"



let papeisEsc = document.querySelector("#papeis")

papeisEsc.addEventListener("change", function(){
    let selectedIndex = papeisEsc.selectedIndex;//selectedIndex é uma propriedade dos elementos <select> em JavaScript. Ela retorna o índice do elemento selecionado dentro do elemento <select>
    let papelSelecionado = papeis[selectedIndex];
    console.log(papelSelecionado);
});

//console.log(papeisEsc)










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
