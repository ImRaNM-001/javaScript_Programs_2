const max = Number.MAX_SAFE_INTEGER;                // to print the largest possible integer value in JavaScript
console.log(max);                                   

console.log(max + 1);           // looks wierd as it gives same number 
console.log(max + 2);            //test  1 23      

const big1 = 1n;            // represents BigInt number
console.log(big1 + 1n);     // prints 2n
console.log(big1 + 2n);     // prints 3n

// console.log(big1 + 1);       // prints TypeError: Cannot mix BigInt and other types, use explicit conversions



// Now to convert another data type to BigInt, we have to use constructor
const big2 = BigInt('22');
console.log(big2);              // prints 22n

// const big3 = BigInt('trauma100');               // will print SyntaxError: Cannot convert trauma100 to a BigInt
// console.log(big3);


const big4 = BigInt(false);          // false is nothing but 0
console.log(big4);                  // prints 0n

const big5 = BigInt(true);          // true is nothing but 0
console.log(big5);                  // prints 1n






