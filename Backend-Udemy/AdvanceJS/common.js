//CommonJS me hum module.exports ka use karte hai aur usko require() function ke through import karte hai.


//named export jisme default export nahi hota hai aur hum multiple functions ko export kar sakte hai.

function add(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}


function mul(a, b) {
    return a*b;
}


module.exports = {
    add,
    sub,
    mul
}