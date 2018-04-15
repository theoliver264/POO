// Array Length
let a = [1, 2, 3, 4];
console.log(a.length);

// Array Prototype
if (!Array.prototype.printValues) {
    Array.prototype.printValues = function () {
        for (let index in this) console.log(index);
    }
}