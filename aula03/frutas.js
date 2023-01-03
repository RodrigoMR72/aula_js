const arrayFrutas = ["maçã", "uva", "banana", "mamão"];

console.log("Salada 01 : ",arrayFrutas);

arrayFrutas.push("leite condensado");

console.log("Salada 02 : ",arrayFrutas);

arrayFrutas.push("leite em pó");

console.log("Salada 03 : ",arrayFrutas);

// Excelente forma de remover o último item do array.
const removido1 = arrayFrutas.pop();

console.log("Salada 04 : ",arrayFrutas);
console.log("Item removido : ",removido1);

// Excelente forma de remover um item no meio do array.
arrayFrutas.splice(2, 1);
console.log("Salada 05 : ",arrayFrutas);

// Excelente forma de remover o primeiro item do array.
const removido2 = arrayFrutas.shift();

console.log("Salada 06 : ",arrayFrutas);
console.log("Item removido : ",removido2);

// Excelente forma de adicionar no primeiro item do array

arrayFrutas.unshift("leite Ninho");

console.log("Salada 07 : ",arrayFrutas);


arrayFrutas.unshift(removido1);

console.log("Salada 08 : ",arrayFrutas);


arrayFrutas.unshift(removido2);

console.log("Salada 09 : ",arrayFrutas);


const nomes = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro"];

// Busca o elemento e retorna a posição. Caso não encontre, retorna o valor -1.
let posicao = nomes.indexOf("Davi");

if(posicao == -1) {
    console.log("Nome não encontrado");
    }
else {
    console.log("Nome encontrado na posição:",posicao, "é:", nomes[posicao]);
}

function falar(parametroFala){
    console.log(parametroFala);
}
falar("Olá Ronier!!!");

function gritar(parametroFala){
    console.log(parametroFala.toUpperCase());
}
gritar("Olá Ronier!!!");

function somar(p1, p2){
    return p1 + p2;
}

console.log(somar(1,2));

function imprimir(funcaoImprimir, texto){
    funcaoImprimir (texto);
}

imprimir(console.log, "Olá mundo!!!");

const salada = ["Maçã", "Uva", "Banana", "Mamão", "Pera"];

function capsLk(valor){
    return valor.toUpperCase();
}

const saladaUpper = salada.map(capsLk);

console.log(salada);
console.log(saladaUpper);


// Modelo de ARROW FUNCTION.
const saladaLow = salada.map((fruta)=> {return fruta.toLowerCase()});

console.log(salada);
console.log(saladaLow);


const saladaNada = salada.map(()=> {return 'Nada'});

console.log(salada);
console.log(saladaNada);

// Quando tenho só uma função no Arrow Function, não precisa de chaves ou return.
const saladaUp = salada.map((fruta)=> fruta.toUpperCase());

console.log(salada);
console.log(saladaUp);

const saladaUp1 = salada.map((fruta, index)=> fruta.toUpperCase() + index);

console.log(salada);
console.log(saladaUp1);

const nomes1 = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro", "Davi"];


function filtrarNomes (nome) {

    if (nome === "Davi")
        return nome;
}

console.log(nomes1.filter(filtrarNomes));


console.log(nomes1.includes("Ronier"));
console.log(nomes1.includes("ronier"));


function filtrarNomes1 (nome) {

    if (nome.toUpperCase() === "Davi".toUpperCase)
        return nome;
}

console.log(nomes1.filter(filtrarNomes1));