import { EmitFlags } from "typescript";

let lname: string = 'name'
let upcase = lname.toUpperCase()
console.log(upcase);


//array
let numlist: Array<number>;
numlist = [1, 2, 3, 4]
console.log(numlist)


//getting the number greater than 2 from array
let results = numlist.filter((num) =>
    num > 2)
console.log(results)

//finding a number in an array

let num1 = numlist.find((num) => num === 2)
console.log(num1)

// sum of all numbers in an array
let sum = numlist.reduce((a, b) => a + b)
console.log(sum)


//enums
enum Color {
    Red,
    Green,
    Blue

}
let c: Color = Color.Red;
console.log(c);



//Tuples
let Book: [string, number, string];
Book = ["Game of Thrones", 1990, "Fantasy"];
console.log(Book[0]);

// the order matters in tuples
//wrong value assignment to wrong type will give error



/* any */
let apartment: any;
apartment = "best apartment";
apartment = 20;
console.log(apartment);
