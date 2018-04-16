let array = [1, 2, 3, 4, 5, 6, 1];

// Array Length
console.log(arr.length);

// Array Prototype
if (!Array.prototype.printValues) {
    Array.prototype.printValues = function () {
        for (let index in this) console.log(index);
    }
}
array.printValues();

// Array from

// Array isArray

// Array observe

// Array of

// Array concat

// Array copyWithin

// Array entries

// Array every

// Array fill

// Array filter

// Array find

// Array findIndex

// Array flatMap

// Array flatten
let spaced = [1,, 3, 4, 5];
let flat = [1, 2, [3, 4]];
let flatDeep = [1, 2, [3, [4]]];
console.log(flat.flatten());        // [1, 2, 3, 4]
console.log(spaced.flatten());      // [1, 3, 4, 5]
console.log(flatDeep.flatten());    // [1, 2, 3, [4]]
console.log(flatDeep.flatten(2));   // [1, 2, 3, 4]

// Array forEach
array.forEach(function (val, i, arr) {
    console.log(val);
});

// Array includes
console.log(array.includes(1));         // true
console.log(array.includes('Hola'));    // false

// Array indexOf
console.log(array.indexOf(1));          // 0
console.log(array.indexOf(1, 3));       // 6
console.log(array.indexOf('Hola'));     // -1

// Array join
console.log(array.join());      // 1,2,3,4,5,6,1
console.log(array.join(' '));   // 1 2 3 4 5 6 1

// Array keys
console.log([...array.keys()]); // [0, 1, 2, 3, 4, 5, 6]

// Array lastIndexOf
console.log(array.lastIndexOf(1)); // 6
console.log(array.lastIndexOf(6)); // 5

// Array map
let arr2 = array.map(function (val, i, arr) {
    return val * val;
});
console.log(array);     // [1, 2, 3, 4, 5, 6, 1]
console.log(arr2);      // [2, 4, 6, 8, 10, 12, 2]

// Array pop
let lastVal = array.pop();
console.log(array);     // [1, 2, 3, 4, 5, 6]
console.log(lastVal);   // 1

// Array push
let len = array.push(lastVal);
console.log(array);     // [1, 2, 3, 4, 5, 6, 1]
console.log(len);       // 7

// Array reduce
let sum = array.reduce(function (acc, cur, i, arr) {
    return acc + cur;
});
console.log(sum);   // 22

sum = array.reduce(function (acc, cur, i, arr) {
    return acc + cur;
}, 10);
console.log(sum);   // 32

let books = [{autor: 'Persona 1', titulo: 'Titulo 1'}, {autor: 'Persona 2', titulo: 'Titulo 2'}];
let autores = books.reduce(function (acc, cur) {
    acc.push(cur.autor);
    return acc;
}, []);
console.log(autores);   // ['Persona 1', 'Persona 2']

// Array reduceRight
autores = books.reduceRight(function (acc, cur) {
    acc.push(cur.autor);
    return acc;
}, []);
console.log(autores);   // ['Persona 2', 'Persona 1']

// Array reverse
console.log(array.reverse());   // [1, 6, 5, 4, 3, 2, 1]

// Array shift
console.log(array.shift()) // out: 1

// Array slice
console.log(array.slice(2)) // [3, 4, 5, 6, 1]

// Array some
var even = function(element) {
    // checa si algun valor es par
    return element % 2 === 0;
  }; 
console.log(array.some(even)); //out: true

// Array sort
console.log(array.sort())// [1, 1, 2, 3, 4, 5, 6]

// Array splice
array.splice(1,0, 'insertado')
console.log(array) // [1, 'insertado', 2, 3, 4, 5, 6, 1]

// Array toLocaleString
console.log(array.toLocaleString()) // "1,2,3,4,5,6,1"

// Array toSource
//Funcion no estandar 

// Array toString
console.log(array.toString()) // "1,2,3,4,5,6,1"

// Array unshift
console.log(array.unshift(3,4))// [3, 4, 1, 2, 3, 4, 5, 6, 1]

// Array values
var iterator = array.values();

console.log(iterator.next().value); // 1 
console.log(iterator.next().value); // 2 
console.log(iterator.next().value); // 3 
console.log(iterator.next().value); // 4 
console.log(iterator.next().value); // 5

// Array [@@iterator]
var eArr = array[Symbol.iterator]()
console.log(eArr.next().value); // 1
console.log(eArr.next().value); // 2
console.log(eArr.next().value); // 3
console.log(eArr.next().value); // 4
console.log(eArr.next().value); // 5