// alert("Hello world");
function bankAccount(number,holderName,balance) {
    this.number=number,
    this.holderName=holderName,
    this.balance=balance;
    
}

function checkBalance(){
    return this.balance;
}
 
function deposit(amount){
return this.balance+=amount;
}
function withdrawing(amount){
    if( this.balance >= amount ) {
       return this.balance -= amount;
    } else {
        throw new Error("operation failed ");
    }
}
const firstAccount=new bankAccount(12345,"Smith",2000);
console.log(firstAccount);
firstAccount.checkBalance=checkBalance; 
console.log(firstAccount.checkBalance()); 
firstAccount.deposit=deposit;
console.log(firstAccount.deposit(1200)); 
firstAccount.withdrawing=withdrawing;
console.log(firstAccount.withdrawing(500)); 


const bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 1000,
    deposit: function (amount) {
        amount > 60000
            ? console.log("Требуется подтверждение легальности доходов")
            : (this.balance += amount);
    },
    withdraw: function (amount) {
        // if (amount <= this.balance) {
        //     this.balance -= amount;
        // } else {
        //     alert('Not enough money on the balance');
        // }
        amount <= this.balance
            ? (this.balance -= amount)
            : console.log("Not enough money on the balance");
    },
    checkBalance: function () {
        console.log(`Account balance is ${this.balance}`);
    },
};

let res = Object.keys(bankAccount);
console.log(res);
const [number, userName, balance]= Object.values(bankAccount);
console.log(number, userName, balance);
res = Object.entries(bankAccount);
console.log(res);
bankAccount.checkBalance();
bankAccount.deposit(500);
bankAccount.checkBalance();
bankAccount.withdraw(700);
bankAccount.checkBalance();
bankAccount.withdraw(1000);
bankAccount.checkBalance();
// function bankAccount(numberAccount, name, balance) {
//     this.numberAccount = numberAccount;
//     this.name = name;
//     this.balance = balance;
//     this.addMoney = function (money) {
//         // способ ввода денег
//         this.balance += money;
//         console.log(`You have added ${money} to your account`);
//     };
//     this.withdrawalMoney = function (money) {
//         // способ вывода денег
//         if (this.balance - money < 0) {
//             console.log("There is not enough money in your account");
//             // alert("There is not enough money in your account");
//         } else {
//             this.balance -= money;
//             console.log(`You have withdrawn ${money} from your account`);
//         }
//     };
//     this.printBalance = function () {
//         // способ проверки баланса
//         console.log(`Your balance: ${this.balance}`);
//     };
// }
// let persons = [person1 = new bankAccount(123,"Ivan",50), 
//                 person2 = new bankAccount(345,"Kolya",150),
//                 person3 = new bankAccount(34,"Vasya",10),
//                 person4 = new bankAccount(36,"Petya",15)];


// console.log(persons);

// persons[0].printBalance();

// persons[0].addMoney(110);
// persons[0].printBalance();

// persons[0].withdrawalMoney(10);
// persons[0].printBalance();

// persons[0].withdrawalMoney(1000);