//default import ka use karte hai to hum usko kisi bhi name se import kar sakte hai.


import multiply from './modules.js';
console.log(multiply(5, 6)); //30


//Isme humne named import ka use kiya hai jisme humko exact name se import karna padta hai jo ki export me diya gaya hai.
import { add, sub } from './modules.js';

console.log(add(5, 6)); //11

console.log(sub(5, 6)); //-1




