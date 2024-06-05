// Crie uma função que receba um array e indique qual o maior valor

const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function findMaxValue(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}

const maxValue = findMaxValue(numArray);
console.log(maxValue);
module.exports = { findMaxValue };
