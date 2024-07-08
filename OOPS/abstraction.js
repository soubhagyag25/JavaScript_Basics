//ES2022 feature: # prefix to create private fields and methods within a class.
class BankAccount {
    // Private fields
    #balance;//declaring a private variable

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Public method to deposit money
    deposit(amount)
     {
        if (amount > 0) 
            {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.#balance}`);
            } 
        else 
            console.log('Invalid deposit amount');
     }

    // Public method to withdraw money
    withdraw(amount) 
    {
        if (amount > 0 && amount <= this.#balance)
             {
            this.#balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.#balance}`);
             } 
        else
            console.log('Invalid withdraw amount');
    }

    // Public method to display balance
    displayBalance() {
        console.log(`Current balance is ${this.#balance}`);
    }

    // Private method to calculate interest
    #calculateInterest(rate) {
        return this.#balance * (rate / 100);
    }

    // Public method to add interest
    addInterest(rate) {
        const interest = this.#calculateInterest(rate);
        this.#balance += interest;
        console.log(`Added interest of ${interest}. New balance is ${this.#balance}`);
    }
}

// Example usage
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.displayBalance();
myAccount.addInterest(5);

// Attempt to access private fields and methods (will result in an error)
//console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
//myAccount.#calculateInterest(5); // SyntaxError: Private field '#calculateInterest' must be declared in an enclosing class
