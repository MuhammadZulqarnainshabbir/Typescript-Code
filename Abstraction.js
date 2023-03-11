var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bankaccount = /** @class */ (function () {
    function Bankaccount(initialBalance) {
        this.balance = initialBalance;
    }
    return Bankaccount;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(initialBalance) {
        return _super.call(this, initialBalance) || this;
    }
    CurrentAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount < 0) {
            console.log('Insufficient funds');
            return;
        }
        this.balance -= amount;
    };
    CurrentAccount.prototype.checkBalance = function () {
        return this.balance;
    };
    return CurrentAccount;
}(Bankaccount));
var currentAccount = new CurrentAccount(1000);
currentAccount.deposit(100);
currentAccount.withdraw(500);
console.log(currentAccount.checkBalance());
