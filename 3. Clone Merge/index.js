const originalObject = { 
    name: "Carmen",
    age: 36,
    country: "Colombia",
};

function clone(source) {
    return { ...source }
}

console.log(clone(originalObject));





//Merge
const student1 = { 
    name: "Mauro",
    surname: "Cabrera",
    age: 61,
    country: "Colombia",
};

const student2 = { 
    name: "Carmen",
    age: 36,
    country: "Spain",
    married: true,
};

function merge(source, target) {
    return { ...target, ...source }
}

console.log(merge(student1, student2));