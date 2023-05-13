let greeting: string = "Hello World";

console.log(greeting);

let userid: number = 1;
console.log(userid);

let isUpdated: boolean = true;
console.log(isUpdated);


// We dont have to specify the type of the variable. Typescript will automatically infer the type of the variable based on the value assigned to it.

// But  there are certain places where types should be specified. For example, when we declare a variable and not assign any value to it, typescript will infer the type of the variable to be any. This is called type inference.


let heroName; // type any
function getHeroName() {
    return "thor";
}
heroName = getHeroName();	