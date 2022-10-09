class Employee {
    name: string;
    age: number;
    adress: string;


    constructor(name: string, age: number, adress: string) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    getthenameage(): string {
        return `${this.name} age is ${this.age}`;
    }
    static getAddress(): string {
        return `${this.name}`
    }
}
let obj1 = new Employee('Ali', 12, 'adress');

console.log(obj1.getthenameage());
console.log(Employee.getAddress());
// static method can be accessed by class name



