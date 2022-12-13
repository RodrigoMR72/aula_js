function calcularDesconto() {
    let valorProduto = document.getElementById('preco').value;

    let resultado = (valorProduto - (valorProduto * 0.2));
    // let valorFinal = (document.getElementsByTagName('h3')[0].innerHTML = `O valor do desconto de 20% é: R$ ${resultado}`);

    let resultadoformatado = parseFloat(resultado).toFixed(2);
    
    let valorFinal = `O valor do desconto de 20% é: R$ ${resultadoformatado}`;

    document.getElementsByTagName('h3')[0].innerHTML = valorFinal;

    console.log(valorProduto);
    console.log(resultado);

   }

