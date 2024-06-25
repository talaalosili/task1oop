//1
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     displayDetails() {
//         console.log(`Car Make: ${this.make}, Model: ${this.model}`);
//     }
// }
// let myCar = new Car("Toyota", "Corolla");
// myCar.displayDetails();

//2
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     displayDetails() {
//         console.log(`Car Make: ${this.make}, Model: ${this.model}`);
//     }
//     start() {
//         console.log(`${this.make} ${this.model} has started.`);
//     }

// }
// let myCar = new Car("Toyota", "Corolla");
// myCar.displayDetails();
// myCar.start();

//3
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     displayDetails() {
//         console.log(`Car Make: ${this.make}, Model: ${this.model}`);
//     }
//     start() {
//         console.log(`${this.make} ${this.model} has started.`);
//     }

// }
// let myCar = new Car("Toyota", "Corolla");
// myCar.displayDetails();
// myCar.start();

//4
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     displayDetails() {
//         console.log(`Car Make: ${this.make}, Model: ${this.model}`);
//     }
//     start() {
//         console.log(`${this.make} ${this.model} has started.`);
//     }
// }
// class ElectricCar extends Car {
//     constructor(make, model, battery_size) {
//         super(make, model);
//         this.battery_size = battery_size;
//     }
//     displayElectricCarDetails() {
//         console.log(`Electric Car Make: ${this.make}, Model: ${this.model}, Battery Size: ${this.battery_size} kWh`);
//     }
// }
// let myElectricCar = new ElectricCar("Toyota", "Corolla", 150);
// myElectricCar.displayDetails();
// myElectricCar.start();
// myElectricCar.displayElectricCarDetails();

//5
// class Account {
//     #balance;

//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }

//     deposit(amount) {
//         this.#balance += amount;

//     }

//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log('مبلغ السحب غير صحيح.');
//         } else {
//             this.#balance -= amount;
//         }
//     }
//     setbalance(initialBalance) {
//         this.#balance = initialBalance;

//     }

//     getBalance() {
//         return this.#balance; // كم باقي من الرصيد

//     }
// }
// const myAccount = new Account();
// myAccount.setbalance(0)
// console.log(myAccount.getBalance());

// myAccount.deposit(50);
// console.log(myAccount.getBalance());

// myAccount.withdraw(30);
// console.log(myAccount.getBalance());