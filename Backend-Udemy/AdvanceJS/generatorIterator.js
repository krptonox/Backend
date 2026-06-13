//Generator function ek bar mein result genrate nhi krta  hai ye puran result store krta hai aur next call pe puran result ke sath new result bhi generate krta hai

function* numberGenerator(){
      yield 1
      yield 2
      yield 3
}

let gen  = numberGenerator()
let gen2 = numberGenerator()


console.log(gen.next().value) //1
console.log(gen.next().value) //2
console.log(gen.next().value) //3


console.log(gen2.next().value) //1
console.log(gen2.next().value) //2
console.log(gen2.next().value) //3