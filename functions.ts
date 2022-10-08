//1st way to declare the type of the function

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2))

// 2nd way to declare function type


const sub = (a: number, b: number): number => a - b;
console.log(sub(5, 2))


// 3rd way to declare function type
const multi = function (a: number, b: number): number {
    return a * b
}
console.log(multi(5, 1));