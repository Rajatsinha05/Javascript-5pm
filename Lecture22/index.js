class BankAccount {
    #accountNo;
    #username;
    #branch;
    #amount;
    constructor(accountNo, username, branch) {
        this.#accountNo = accountNo;
        this.#username = username;
        this.#branch = branch;
        this.#amount = 0;
        this.limit = 100000;
    }

    getUsername() {
        return this.#username;
    }

    setUsername(username) {
        this.#username = username;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#amount += amount;
        } else {
            console.log("amount must be greater than zero");
        }
    }
    getAmount() {
        return this.#amount;
    }
    #isWalletAvailable(reqamount) {
        if (reqamount > 0) {
            if (reqamount <= this.#amount) {
                return true;
            } else {
                console.log("please deposit money before");
                return false;
            }
        } else {
            console.log("amount must be greater than zero");
            return false
        }
    }
    withdraw(reqamount) {
        if (this.#isWalletAvailable(reqamount)) {
            this.#amount -= reqamount
            console.log("please collect your money");
        }
    }

    banking() {
        console.log("i am  BankAccount");
    }

}


class SalaryAccount extends BankAccount {
    constructor(accountNo, username, branch,) {
        super(accountNo, username, branch)
        this.crediCard = 50000
    }
    pay(amount) {
        if (amount <= this.crediCard && amount > 0) {
            this.crediCard -= amount
            console.log("paid amount ");
        }
    }
    billPayment(amount) {
        let usedAmount = 50000 - this.crediCard
        if (amount <= usedAmount && amount > 0) {
            this.crediCard += amount
        }
    }
    GenerateBill() {
        let usedAmount = 50000 - this.crediCard
        return usedAmount
    }

    banking() {
        console.log("i am  SalaryAccount");
    }

    print() {

        console.log("hello");
    }

    print(name) {
        console.log(` hello ${name}`);
    }

}

let sc = new SalaryAccount(9864876274, "dhanji", "surat")
let ac = new BankAccount(9864876274, "dhanji", "surat")

sc.banking()
ac.banking()

sc.print()