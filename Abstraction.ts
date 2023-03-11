abstract class Bankaccount { // create an abstract class

    protected balance: number; // create a protected property calaed balance

    // create a constructor that takes an initial balance as a parameter
    // assign the initial balance to the balance property
    constructor(initialBalance: number) { 
        this.balance = initialBalance;
    }

    // create an abstract method called deposit that takes an amount as a parameter
    abstract deposit(amount: number): void;

    // create an abstract method called withdraw that takes an amount as a parameter
    abstract withdraw(amount: number): void;

    // create an abstract method called checkBalance that returns a number
    abstract checkBalance(): number;
}

// create a class called CurrentAccount that extends the Bankaccount class and implement the abstract methods
class CurrentAccount extends Bankaccount {
 
    // create a constructor that takes an initial balance as a parameter
    // call the super constructor and pass the initial balance as a parameter
    constructor (initialBalance: number) {
        super(initialBalance);
    }

    // implement the deposit method
    deposit(amount: number): void {
        this.balance += amount;
    }

    // implement the withdraw method
    // if the balance is less than the amount to withdraw, log 'Insufficient funds'
    withdraw(amount: number): void {
        if (this.balance - amount < 0) {
            console.log('Insufficient funds');
            return;
        }
        this.balance -= amount;
    }

    // implement the checkBalance method

    checkBalance(): number {
        return this.balance;
    }
}

// create an instance of the CurrentAccount class and pass an initial balance as a parameter
const currentAccount = new CurrentAccount(1000);

// call the deposit method and pass an amount as a parameter
currentAccount.deposit(100);

// call the withdraw method and pass an amount as a parameter
currentAccount.withdraw(500);

// call the checkBalance method and log the result
console.log(currentAccount.checkBalance());
