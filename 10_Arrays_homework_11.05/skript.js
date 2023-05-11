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