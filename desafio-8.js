// Crie uma função que receba um array e um valor e retorne o número de vezes
// que esse valor aparece no array

const numArray = [[1, 2, 2, 3, 4, 2], 2];

//Use a seguinte função para sua resposta
function countCurr(array, value) {
    let count = 0
    for (let i = 0; i < array[0].length; i++) {
        if (array[0][i] === value) {
            count++
        }
    }
    return count
}

const count = countCurr(numArray, 2);
console.log(count);
module.exports = { countCurr };
