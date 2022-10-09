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
console.log("The result of multiply function is", multi(5, 1));
// optional parameter
function sum(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log("The result of function with optional Parameter", sum(9, 8, 7));
// required parameter
function subt(a, b, c = 1) {
    return a - b - c;
}
console.log(subt(9, 3, 1)); // if we dont pass the value of c/ third param it will use the default value
//otherwise use the param value we passed
//genric function
function getitem(item) {
    return new Array().concat(item);
}
console.log("getitems function generic function", getitem(['a', 'b', 'c', 'd']));
