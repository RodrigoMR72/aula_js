// function liberarAcesso(idade, nome) {

// if (idade >= 18 && idade < 60) {
//   console.log(`Pode entrar!!! ${nome}`);
// } else if (idade >= 60) {
//   console.log(`Entrada Gratuita!!! ${nome}`);
// } else {
//   console.log(`Foi barrado!!! ${nome}`);
// }
// }

// liberarAcesso(75, 'Fracisvado');
// liberarAcesso(16, 'Edivaldo');
// liberarAcesso('20', 'Lucivaldo');

function liberarAcesso() {

    let idade = document.getElementById('idade').value;

    let nome = document.getElementById('nome').value;

        if (idade == '' || nome=='') {
            alert('Favor informar nome/idade!!!');
        } else if (idade >= 60) {
            console.log(`${nome}, ${idade} anos, entrada gratuita!!!`);
        }  else if (idade >= 18 && idade < 60) {
            console.log(`${nome}, ${idade} anos, pode entrar!!!`);
        } else {
            console.log(`${nome}, ${idade} anos, entrada não autorizada!!!`);
        }
    }