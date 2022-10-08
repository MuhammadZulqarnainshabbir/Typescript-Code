"use strict";
//1st way to declare the type of the function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// 2nd way to declare function type
const sub = (a, b) => a - b;
console.log(sub(5, 2));
// 3rd way to declare function type
const multi = function (a, b) {
    return a * b;
};
console.log(multi(5, 1));
