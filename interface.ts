interface user {
    name: string;
    age?: number; //optional parameter
    NIC: number;
    email: string;
}

let users: user = { name: 'ahmed', NIC: 965443, email: 'qw@gmail.com' };
/* Object Destructoring 

only name and can be accessed now
let {name,email}: user = { name: 'ahmed', NIC: 965443, email: 'qw@gmail.com' };
*/

export interface Login {
    login(): user; //interface can have function definition

}

let [user1, user2]: user[] = [
    { name: 'ahmed', NIC: 965443, email: 'qw@gmail.com' },
    { name: 'ahmed', NIC: 965443, email: 'qw@gmail.com' },
    { name: 'ahmed', NIC: 965443, email: 'qw@gmail.com' }
]

console.log(user1, user2);