// Crie uma função que receba um array de objeto e uma chave, e retorne
// um objeto que agrupa os elementos do array pela chave especificada

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
  ];

//Use a seguinte função para sua resposta
function removeDup(array, key) {
    return array.reduce((acc, current) => {
        const group = acc[current[key]] || []
        group.push(current)
        acc[current[key]] = group
        return acc
      }, {})
}

const groupBy = removeDup(data, "age");
console.log(groupBy)
module.exports = { removeDup };
