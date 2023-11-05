/*
Filename: ComplexProgram.js
Content: Complex program that simulates a virtual bank and performs various operations such as account creation, balance inquiry, deposits, withdrawals, and transfers between accounts.
*/

// Class representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolderName, bankName, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.bankName = bankName;
    this.balance = initialBalance;
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`$${amount} deposited successfully into Account ${this.accountNumber}`);
    } else {
      console.log('Invalid amount to deposit');
    }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`$${amount} withdrawn successfully from Account ${this.accountNumber}`);
    } else {
      console.log('Insufficient balance or invalid amount to withdraw');
    }
  }
}

// Class representing a virtual bank
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
  }

  // Method to create a new bank account
  createAccount(accountNumber, accountHolderName, initialBalance) {
    const account = new BankAccount(accountNumber, accountHolderName, this.bankName, initialBalance);
    this.accounts.push(account);
    console.log(`Account ${accountNumber} created successfully in ${this.bankName}`);
  }

  // Method to get account balance
  getAccountBalance(accountNumber) {
    const account = this.accounts.find((acc) => acc.accountNumber === accountNumber);
    if (account) {
      console.log(`Balance of Account ${accountNumber}: $${account.balance}`);
    } else {
      console.log(`Account ${accountNumber} not found in ${this.bankName}`);
    }
  }

  // Method to perform amount transfer between accounts
  transferAmount(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.accounts.find((acc) => acc.accountNumber === fromAccountNumber);
    const toAccount = this.accounts.find((acc) => acc.accountNumber === toAccountNumber);

    if (fromAccount && toAccount) {
      if (fromAccount.balance >= amount) {
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        console.log(`$${amount} transferred successfully from Account ${fromAccountNumber} to Account ${toAccountNumber}`);
      } else {
        console.log('Insufficient balance to perform transfer');
      }
    } else {
      console.log('One or both accounts not found');
    }
  }
}

// Create an instance of Bank
const myBank = new Bank('MyBank');

// Create some bank accounts
myBank.createAccount('1234567890', 'John Doe', 1000);
myBank.createAccount('0987654321', 'Jane Smith', 500);

// Deposit some money into an account
myBank.accounts[0].deposit(200);

// Withdraw money from an account
myBank.accounts[1].withdraw(100);

// Transfer amount between accounts
myBank.transferAmount('1234567890', '0987654321', 300);

// Get account balances
myBank.getAccountBalance('1234567890');
myBank.getAccountBalance('0987654321');
