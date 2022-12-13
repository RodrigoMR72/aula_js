let pais = 'Brasil';

console.log(pais);

// transformando letras para maiúsculas - como é um método, tem que ter os parênteses, senão o JS considera como uma propriedade.

console.log(pais.toUpperCase());

console.log(pais.toLowerCase());

let frase = ', um país continental.';

console.log(pais + frase);

// Concatenando string utilizando o template string (usa crase), forma atualizada de concatenação.

console.log(`${pais} ${frase}`);

console.log(`${pais} ${frase}`.toUpperCase());

console.log(`O ${pais}, país continental.`);

let frasecompleta = `O ${pais}, país continental.`;

console.log(frasecompleta.replace('continental', 'tropical'));

console.log(frasecompleta.length);