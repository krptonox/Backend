let car = {
    make: "BMW",
    model: "X5",
    year: 2020,
    start: function(){
        return `The ${this.make} ${this.model} is starting.`
    }
}
  console.log(car)
  console.log(car.start());

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// let person1 = new Person("John", 30);
// let person2 = new Person("Jane", 25);

// console.log(`person1`,person1)
// console.log(`person2`,person2)

//prototypal Change
function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    return `${this.name} makes a sound.`
}

let dog = new Animal("Dog");
let cat = new Animal("Cat");

// console.log(`dog`,dog)

// console.log(dog.speak());
// console.log(cat.speak());

Array.prototype.batman = function(){
    return `I am ${this}`
}

let myArray = [1,2,3,4,5];
// console.log(myArray.batman());


//constructor ek function hai jise hm new keyword ke sath call karte hai. Ye ek object create karta hai aur uske properties ko initialize karta hai.
class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `The ${this.make} ${this.model} is starting.`
    }
}


class Car extends Vehicle {
    drive(){
        return `The ${this.make} ${this.model} is driving.`
    }
}

console.log(`Vehicle`,Vehicle)
console.log(`Car`,Car)

const myCar = new Car("Audi","Q7");
console.log(`myCar`,myCar.start())
console.log(myCar.drive())


//Encapsulation
class BankAccount {
    #balance;

    deposit(amount){
        this.#balance = (this.#balance || 0) + amount;
        return `Deposited ${amount}. Current balance: ${this.#balance}`
    }
    getBalance(){
        return `Current balance: ${this.#balance}`
    }
}


let account = new BankAccount();
// console.log(account.deposit(1000));
// console.log(account.getBalance());

//Abstraction
class coffeeMachine {
    start(){
        return "Starting the coffee machine..."
    }
    brewCoffee(){
        return "Brewing coffee..."
    }

    pressCoffeeButton(){
        let ms1 = this.start();
        let ms2 = this.brewCoffee();
        return `${ms1} then ${ms2}`;
    }
}

let myCoffeeMachine = new coffeeMachine();
// console.log(myCoffeeMachine.start());
// console.log(myCoffeeMachine.brewCoffee());
// console.log(myCoffeeMachine.pressCoffeeButton());



//Polymorphism
class bird{
    fly(){
        return `Im a bird and I can fly.`
    }
}

class eagle extends bird{
    fly(){
        return `Im an eagle and I can fly high.`
    }
}


class penguin extends bird{
    fly(){
        return `Im a penguin and I cannot fly.`
    }
}

// let myEagle = new eagle();
// console.log(myEagle.fly());

// let myPenguin = new penguin();
// console.log(myPenguin.fly());

// let myBird = new bird();
// console.log(myBird.fly());


//Static Keyword is used to define static methods that belong to the class rather than instances of the class. Static methods can be called without creating an instance of the class.
class Calculator {
    static add(a,b){
        return a + b;
    }
}

let minCalc = new Calculator();
// console.log(minCalc.add(5,10));

// console.log(Calculator.add(5,10));



//#############  Getters and Setters  #############
class Employee {
     
    #salary;

    constructor(name,salary){
        if(salary < 0){
            return `Salary cannot be negative.`
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to access the salary.`
    }

    set salary(newSalary){
        if(newSalary < 0){
            return `Salary cannot be negative.`
        }
        this.#salary = newSalary;
    }
}   


let emp1 = new Employee("Alice",-50000);
console.log(emp1.salary);