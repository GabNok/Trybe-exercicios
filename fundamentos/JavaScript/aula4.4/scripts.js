// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// function sum( number1, number2) {
//     return number1 + number2;
// }
// console.log (sum(5, 3));
// console.log (sum(7, 4));
// console.log (sum(1, 9))


// - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function lessThan (number1, number2) {
//     if (number1 < number2) {
//         // console.log ("eu sou 1");
//         return number1; 
//     }
//     // console.log ("eu sou 2")
//         return number2; ;    
// }
// console.log(lessThan (4,4))


// refatorar o jogo da mega !!!!!!!!

// 1 critart uma função para gerar UM numero aleatório

// function generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 60) + 1;
//     return randomNumber; 
// }
// console.log (generateRandomNumber())



// 2 criar um jogo completo, com 6 números. 

// function generateGame() {
//     let megaSenaGame = [];
//     for (let index = 1; index <= 6; index +=1) {
//         megaSenaGame.push(generateRandomNumber())
//   }
//   return megaSenaGame
// }



// 3 criar um verificador de acertos

// function checkNumberOfHits (person, megaSenaGame) {
//     let numberOfHits = 0
    
// }

// 4 gerar o jogo 


// let jogoDaniel = [7, 14, 28, 22, 37, 49];

// // let numero1 = 7;
// // let numero2 = 15;
// // let numero3 = 22;
// // let numero4 = 49;
// // let numero5 = 37;
// // let numero6 = 14;

// obs: Math.floor(Math.random() * 60) + 1;   >> gerador de número randômicos
// let numero1 = Math.floor(Math.random() * 60) + 1;
// let numero2 = Math.floor(Math.random() * 60) + 1;
// let numero3 = Math.floor(Math.random() * 60) + 1;
// let numero4 = Math.floor(Math.random() * 60) + 1;
// let numero5 = Math.floor(Math.random() * 60) + 1;
// let numero6 = Math.floor(Math.random() * 60) + 1;

// let sorteio = [numero1, numero2, numero3, numero4, numero5, numero6]


// let acertos = 0;
// // for (inicialização, verificação, atualização)
// for (let index = 0; index < jogoDaniel.length; index += 1) {
// // mostrar na tela (nome do array[nome da variável criada para for])
//     console.log (jogoDaniel[index]);
//     for (let index2 = 0; index2 < sorteio.length; index2++) {
//          sorteio[index2];
//         if (sorteio[index2] === jogoDaniel[index])
//         acertos += 1;
//     }
//     }
// console.log ("jogo do Daniel: " , jogoDaniel);
// console.log ("jogo Sorteado: " , sorteio);
// console.log ("vc acertou " , acertos)






// //1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log ("Boas vindas , " + info.personagem);



