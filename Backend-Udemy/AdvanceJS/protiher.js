function Person(name){
    this.name = name;
}


Person.prototype.greet = function(){
    console.log("Hello, my name is " + this.name);
}

let person1 = new Person("Alice");
console.log(person1.name); // Output: Alice
person1.greet(); // Output: Hello, my name is Alice