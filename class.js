"use strict";
class Employee {
    constructor(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    getthenameage() {
        return `${this.name} age is ${this.age}`;
    }
    static getAddress() {
        return `${this.name}`;
    }
}
let obj1 = new Employee('Ali', 12, 'adress');
console.log(obj1.getthenameage());
console.log(Employee.getAddress());
// static method can be accessed by class name
