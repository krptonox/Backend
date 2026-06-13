const person = {
    name: "Alice",
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.greet(); // Output: Hello, my name is Alice
const greetFunction = person.greet;
greetFunction(); // Output: Hello, my name is undefined (or may throw an error in strict mode)

bindPerson = person.greet.bind({name:"Bob"});
bindPerson(); // Output: Hello, my name is Bob

//bind, call and apply are used to explicitly set the value of 'this' in a function.