// Crie uma função para adicionar um elemento ao final do array

const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function addElement(array ,elem) {
    array.push(elem);
    return numArray;
}

const newArray = addElement(numArray, 7)
console.log(newArray);
module.exports = { addElement };
