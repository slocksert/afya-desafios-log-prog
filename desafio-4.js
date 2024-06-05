// Crie uma função que receba um dado array e retorne um novo array com
// cada valor dobrado

const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function doubleValues(array) {
    return array.map((value) => value * 2)
}

const doubledArray = doubleValues(numArray);
console.log(doubledArray)

module.exports = { doubleValues };
