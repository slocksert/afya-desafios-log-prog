// Crie uma função para filtrar apenas os valores pares

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Use a seguinte função para sua resposta
function filtrarPares(array) {
    return array.filter((num) => num % 2 === 0)
}

const filteredArray = filtrarPares(numArray)
console.log(filteredArray)
module.exports = { filtrarPares };
