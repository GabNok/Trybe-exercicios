// let valor1 = 15;
// let valor2 = 17;
// let valor3 = 19;

// if (valor1 > valor2 && valor1 > valor3) {
//     console.log (valor1)
// }
// else if (valor2 > valor1 && valor2 > valor3) {
//     console.log (valor2)
// }
// else {
//     console.log (valor3)
// }

// let valor1 = 20

// if (valor1 > 0) {
//     console.log ("positivo")
// }
// else {
//     console.log ("negativo")
// }

// let valor1 = 90
// let valor2 = 60
// let valor3 = 20

// let soma = valor1 + valor2 + valor3
// console.log (soma)

// if (soma == 180) {
//    console.log ("true")
// }
// else if (soma < 180) {
//     console.log ("false")
// }
// else {
//     console.log ("erro")
// }




// let pecaDeXadres = "CavALo"; 

// pecaDeXadres = pecaDeXadres.toLowerCase();

// if (pecaDeXadres === "bispo") {
//     console.log("diagonal");
// } else if (pecaDeXadres === "cavalo") {
//     console.log ("move em L");
// } else if (pecaDeXadres === "torre") {
//     console.log ("move reto e lateral");
// } else {
//     console.log ("error");
// }





//  let valor1 = -40

//  if (valor1 > 100 || valor1 < 0 ) {
//  console.log ("error")
//  }else if (valor1 >= 90) {
//     console.log ("A")
//  } else if (valor1 >=80) {
//      console.log ("B")
//  } else if (valor1 >=70) {
//     console.log ("C")
//  } else if (valor1 >= 60) {
//      console.log ("D")
//  } else if (valor1 >=50) {
//      console.log ("E")
//  } else {
//      console.log ("F");
//  }


// EXERICíCIOS 8

// const valor1 = 2
// const valor2 = 4
// const valor3 = 8

// if (valor1 % 2 === 0 ||valor2 % 2 === 0 || valor3 % 2 === 0) {
//     console.log (true)
// }else {
//     console.log (false)
// }



// const valor1 = 5
// const valor2 = 4
// const valor3 = 8

// if (valor1 % 2 !== 0 ||valor2 % 2 !== 0 || valor3 % 2 !== 0) {
//     console.log (true)
// }else {
//     console.log (false)
// }



// const valor1 = 200;
// const valor2 = valor1 + valor1*0.2 + 50;

// let valorCustoTotal = valor1 + valor1*0.2;
// let lucro = valor2 - valorCustoTotal;
 
// if (valor1 < 0) {
//     console.log ("error");
// }
// console.log (1000 * lucro);



// let salarioBruto = 3500;
// let inss = 0;
// let ir = 0;
// // let salarioBase = salarioBruto - inss - ir; vai lá pra depois das variáveis 



// if (salarioBruto > 0 && salarioBruto < 1556.94) {
//      inss = salarioBruto *0.08;
// } else if (salarioBruto > 1556.95 && salarioBruto < 2594.92) {
//    inss = salarioBruto * 0.09; 
// } else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
//     inss = salarioBruto* 0.11;
// } else { 
//     inss = 570,88;
// }
//  console.log ("inss é igual a " + inss);

// if (salarioBruto > 0 && salarioBruto < 1903.98) {
//      ir = 0
// } else if (salarioBruto > 1903.99 && salarioBruto < 2826.65) {
//    ir = (salarioBruto - inss) * 0.075 - 142.8; 
// } else if (salarioBruto > 2826,66 && salarioBruto < 3751.05) {
//     ir = (salarioBruto - inss) * 0.15 - 354.80;
// } else if (salarioBruto > 3751.06 && salarioBruto <4664.68) {
//     ir = (salarioBruto - inss) * 0.225 - 636.13;
// } else {
//     ir = (salarioBruto - inss) * 0.275 - 869.36;
// } 
// console.log ("o IR é gual a " + ir)


// let salarioBase = salarioBruto - inss - ir

// console.log ("Seu salario base é igual a " + salarioBase)



// var numero = 7

// for (var contador = 1; contador <= 9; contador = contador+1) {
//     console.log ("*")
//     console.log (numero * contador);    
// }



// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let lista of names) {
//     console.log (lista)
// }




// loteria, comparando 2 valores - utilizando for dentro de for - podendo usar um randomizador!!!

// let jogoDaniel = [7, 14, 28, 22, 37, 49];

// let numero1 = 7;
// let numero2 = 15;
// let numero3 = 22;
// let numero4 = 49;
// let numero5 = 37;
// let numero6 = 14;

// obs: Math.floor(Math.random() * 60) + 1;   >> gerador de número randômicos
// let numero1 = Math.floor(Math.random() * 60) + 1;
// let numero2 = Math.floor(Math.random() * 60) + 1;
// let numero3 = Math.floor(Math.random() * 60) + 1;
// let numero4 = Math.floor(Math.random() * 60) + 1;
// let numero5 = Math.floor(Math.random() * 60) + 1;
// let numero6 = Math.floor(Math.random() * 60) + 1;

// let sorteio = [numero1, numero2, numero3, numero4, numero5, numero6]


// let acertos = 0;
// for (inicialização, verificação, atualização)
// for (let index = 0; index < jogoDaniel.length; index += 1) {
// mostrar na tela (nome do array[nome da variável criada para for])
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




// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log (numbers[index]);
// }

//  let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log (soma)

// let media = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//      media += numbers[index];
// }
// media /=  numbers.length
// if (media > 20) {
//     console.log ("valor maior que 20")
// } else ("valoe menor ou igual a 20")


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] >maior);
//      maior = numbers[index];
// }
//        console.log (maior);


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         impar += 1;
//     }
// }
//        console.log (impar);



// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = numbers[0];
// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < menor){
//         menor = numbers[index];
//     }
     
// }
//        console.log (menor);



// let numero = [];
// for (let index = 0; index < 26; index += 1) {
//      numero.push(index);
    
// }
// console.log (numero)