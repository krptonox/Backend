function Greet(name,age){
    this.name  = name;
    this.age = age;
}

function Car(make,model){
    this.make = make;
    this.model = model;
}

// let myCar = new Car("BMW","X5")
// console.log(`myCar`,myCar)

// let mynewcar = new Car("Audi","Q7")
// console.log(`mynewcar`,mynewcar)

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a ${this.type} of tea`;
    }
}

let greenTea = new Tea("Green");
console.log(typeof(greenTea));
console.log(greenTea.describe());

console.log(console);


function BatMan(name,age){
    this.name = name;
    this.age = age;
}


BatMan.prototype.describe = function(){
    return `I am ${this.name} and I am ${this.age} years old. It is Vengeance! on the leaf`
}

let batman = new BatMan("Sasuke Uchia", 19);
// console.log(`batman`,batman)
// console.log(batman.describe());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let coffee = new Drink("Coffee");
let tea = Drink("Tea"); // This will throw an error because it's not called with new keyword

console.log(`coffee`,coffee)
console.log(`tea`,tea)