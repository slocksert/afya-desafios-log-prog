// Crie uma função para remover o último elemento do array

const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function removerUltElemento(array) {
    array.pop();
    return array;
}

removerUltElemento(numArray);
console.log(numArray);

module.exports = { removerUltElemento };
