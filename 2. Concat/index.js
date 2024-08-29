//Concat
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

console.log(concat(array1, array2));






//Opcional
const array3 = [1, 2, 3, 4];
const array4 = [5, 6, 7, 8];
const array5 = [9, 10, 11, 12];

const concatOpcional = (...arrays) => {
    return [].concat(...arrays);
}

console.log(concatOpcional(array3, array4, array5));