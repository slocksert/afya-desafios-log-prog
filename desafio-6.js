// Crie uma função fazer a soma de todos os valores de um array
const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function sumArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

const sum = sumArray(numArray);
console.log(sum);

module.exports = { sumArray };
