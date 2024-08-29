// Head
const frutas = ["manzana", "pera", "plátano", "sandía"];

const head = ([first]) => first;
console.log(head(frutas));




// Tail
const numeros = [1, 2, 3, 4, 5];
const tail = ([first, ...args]) => {
    console.log(args);
};
    
tail(numeros);




// Init
const deportes = ["futbol", "baloncesto", "tenis", "boxeo"];
const init = (array) => {
    return array.slice(0, -1);
};

console.log(init(deportes));




//Last
const letras = ["a", "b", "c", "d", "e"];
const last = (array) => {
    return array.slice(array.length -1);
};

console.log(last(letras));