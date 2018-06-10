"use strict";
let bankAccount;
bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    },
};
let myself;
myself = {
    name: "Harry Manchanda",
    bankAccount,
    hobbies: ["Cricket", "Coding"],
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=challenge1.js.map