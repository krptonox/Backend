let computer  = {
    cpu: 12
}

let lenovo = {screen: "HD",
    __proto__: computer
}

let tomHardware = {}

// console.log(`computer`,lenovo.__proto__)


let genneriCar = {tyers: 4}


let tesla = {driver: "ai"}

Object.setPrototypeOf(tesla, genneriCar)

 console.log(`tesla`,Object.getPrototypeOf(tesla))