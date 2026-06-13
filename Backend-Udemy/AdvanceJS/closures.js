//Closusres are fxn that have access to the variables in their outer scope even after the outer function has returned.

function outer(){
    let counter = 4
    return function (){
        counter++
        return counter
    }
}

let increment  = outer() //increment is now a closure that has access to the counter variable in the outer function
console.log(increment()) //5
console.log(increment()) //6