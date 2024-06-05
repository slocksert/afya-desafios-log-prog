// Crie uma função para inverter os números do Array

const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function reverseArray(array) {
    return array.reverse()
}

const reversedArray = reverseArray(numArray);
console.log(reversedArray);
module.exports = { reverseArray };
