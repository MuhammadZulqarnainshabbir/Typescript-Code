function add(a: number, b: number): number {
    return a + b;
}
let addition = add(10, 20);
console.log(addition); // 30

let loginuser = (username: string, password: string, islogin:boolean = false) => {

    return islogin ? `Welcome ${username}` : `Please login`;

}

console.log(loginuser('admin', 'admin', true)); // Welcome admin


const getHello =():string =>{
    return 'Hello World'; 
}