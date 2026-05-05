//DECLARAÇÃO DE ARRAY

let frutas_vazio = []; //declaração vazia usando colchetes
// OU 
let frutas_cheio = ["maça", "banana", "uva"];

//Outra forma de declaração
let carros = new Array(); // Esta também é uma forma de criar um array

//****************************************************************************//

//PARA INSERIR VALORES
carros.push("Ferrari"); // Insere o valor na última posição do array

carros.pop(); //remove o último valor do array
// vamos supor que eu queira inserir o valor morango, mas antes de maça
frutas_cheio.unshift("morango"); // insere o valor na posição 0 do array

// nossos valores ficariam frutas_cheio = ["morango", "maça", "banana", "uva"]

frutas_cheio.shift(); // remove o valor da primeira posição do array
//nossos valores ficariam frutas_cheio = ["maça", "banana", "uva"]

frutas_cheio.push("laranja");
// ["maça", "banana", "uva", "laranja"]

frutas_cheio.splice(1,1); // remove a banana
// ["maça", "uva", "laranja"]
// no uso do splice, o primeiro argumento é o índice do array e o segundo argumento 
// é quantidade de itens a serem removidos

// outra forma de remover valores
 let numeros = [10,20,30,40];

 // quero remover o valor 30

 let novo = numeros.filter(n => n !== 30);
 //novo =[10,20,40]

//Array, em javascript, além de ser infinito, aceita valores de múltiplos formatos

let misto = [10, "texto", true];

//declaração de array como matriz
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matriz[0,1]); //retorna o valor 2 (linha 0, coluna 1)

//**************************************************************************************
// *************************************************************************************
// ************************************************************************************* 

//OBJETO 

// objetos são declarados com pares chave-valor
let pessoa = {
    nome : "João",
    idade : 25
};

console.log("Olá, " + pessoa.nome); //vai aparecer "Olá, João"

let array_pessoa = ["joão", 25];  // se fosse em um array
console.log ("Olá, " + array_pessoa[0]);

// voltando ao objeto
pessoa.nome = "Maria";
console.log(pessoa.nome); // agora aparece "Maria", não mais "João"

pessoa.profissao = "Professora";
console.log(pessoa.profissao); // vai aparecer professora

delete pessoa.idade; // remove a propriedade idade

let exemplo = {
    numero: 10,
    texto: "oi",
    booleano: true,
    lista: [1,2,3],
    outroObjeto: {x: 1}
    }; // posso guardar número, texto, booleano, arrays e outro objeto dentro de um objeto

    let pessoa = {
        nome: "João",
        falar: function(){
            console.log("Olá!");
        }
    };

    pessoa.falar();
