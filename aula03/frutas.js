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
    console.log("Nome encontrado: ", nomes[posicao]);
}

console.log(posicao);
