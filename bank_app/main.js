class BankAccount{
    accountNumber = "1000";
    ownerName = "Atiqur Rahman";
    balance = 0;

    deposit(amount){
        this.balance = this.balance + amount;
        console.log("Deposited: ", amount);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance = this.balance - amount;
            console.log("Withdrawn: ", amount);
        }
    }

    getBalance(){
        console.log("Balance: ", this.balance);
    }

    displayAccountInfo(){
        console.log(`Account Holder Name: ${this.ownerName}\nAccount Number: ${this.accountNumber}\nBalance: ${this.balance}`);
    }

}

let account1 = new BankAccount();
account1.deposit(1000);
account1.getBalance();
account1.withdraw(500);
account1.getBalance();
account1.displayAccountInfo();


let account2 = new BankAccount();
account2.deposit(2000);
account2.getBalance();
account2.withdraw(300);
account2.getBalance();
account2.displayAccountInfo();