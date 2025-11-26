#include <iostream>
#include <string>
using namespace std;

// Class Definition
class BankAccount {
private:
    string accountNumber;
    double balance;

public:
    // Constructor
    BankAccount(string accNumber) {
        accountNumber = accNumber;
        balance = 0.0; // Initial balance
    }

    // Method to deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: $" << amount << endl;
        } else {
            cout << "Invalid amount to deposit." << endl;
        }
    }

    // Method to withdraw money
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: $" << amount << endl;
        } else {
            cout << "Insufficient balance." << endl;
        }
    }

    // Method to check balance
    void checkBalance() {
        cout << "Current balance: $" << balance << endl;
    }
};

int main() {
    string accNum;
    cout << "Enter account number: ";
    cin >> accNum;

    // Create a BankAccount object
    BankAccount myAccount(accNum);

    // Test the account
    myAccount.deposit(500.0);     // Deposit $500
    myAccount.checkBalance();      // Check balance
    myAccount.withdraw(200.0);    // Withdraw $200
    myAccount.checkBalance();      // Check balance
    myAccount.withdraw(400.0);    // Attempt to withdraw $400 (should fail)
    myAccount.checkBalance();      // Final balance check

    return 0;
}
