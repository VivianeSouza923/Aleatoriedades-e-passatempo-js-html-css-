// assim se comenta o código em uma linha

/*assim
se
comenta
mais de
uma
linha de uma vez*/

/* como resolver problemas no acento? 
usa o: < meta charset = "utf-8" > */


//  ****** imprimir em tela

/* 

var mensagem = "Deus é bondoso!";
alert(mensagem);

*/

// ****** operações matemáticas: fazer e imprimir
/*
// declaração de variáveis
var a = 2;
var b = 3;

// executar as operações
var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

// comando alert exibe uma mensagem.
alert(soma);
alert(sub);
alert(mult);
alert(div); */

//estruturas condicionais

// verificando
//alert(5 % 3);

var b = 2;
var c = "vivi";

/*
if (b % 2 == 1) {
    alert("Número ímpar");
} else {
    alert("Número par");
}*/
/*
if (c % 2 == 0) {
    alert("Número par");
} else if (c % 2 == 1) {
    alert("Número ímpar");

} else {
    alert("Acredito que você não tenha digitado um número");
}*/

// estruturas de repetição

// estrutura de condição while
/*
var i = 0;

while (i < 3) {
    alert(i);
    i = i + 1;
}
*/
// laço for
/*
var j;

for (j = 0; j < 2; j++) {
    alert(j);
}*/

// tipos de dados em JS
/*
var numero = 6;
var decimal = 4.5;
var string = "vivi";
var lista = ["vivi", "laranja", "ninho"];

// alert(string);

// arrays

//alert(lista[2]);

for (i in lista) {
    alert(lista[i]);
}*/

// CONSOLE LOG
// console.log("ol");

// FUNÇÕES
/*

function soma(a, b) {
    console.log(a + b);
}

//soma(2, 2);

function sub(a, b) {
    return a - b;
}

var s = sub(5, 3);

//console.log(s);

function mult(a, b) {
    return a * b;
}

console.log(mult(5, 5))*/

// EVENTOS 
// SÃO FORMAS DE INTERAÇÃO DA MINHA PÁGINA HTML COM O MEU SCRIPT
// pesquise "eventos javascript"

function mens(nome) {
    alert("saia daqui " + nome);
}