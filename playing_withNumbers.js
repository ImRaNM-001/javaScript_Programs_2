console.log(145e4);         // prints 1450000
console.log(145e-4);         // prints 0.0145

console.log(20 * '20');         // prints 400 unlike addition (+) parameter which concatenates and prints string.

console.log(Infinity);                         // prints Infinity
console.log(Number.POSITIVE_INFINITY);        	  // prints Infinity
console.log(Number.NEGATIVE_INFINITY);           // prints -Infinity

console.log(1/0);                   	  // prints Infinity
console.log(-1/0);        	              // prints -Infinity

console.log('a particular string'/0);       // prints NaN
console.log(0xEF);                          // prints 239

const num = 16;
console.log(num.toString() );                   // prints 16 
console.log(typeof(num.toString()) );           // prints string 

const decNum = 24.567;
console.log(decNum.toFixed(0) );        	  // prints 25
console.log(decNum.toFixed(2) );        	  // prints 24.57

console.log(decNum.toPrecision() );        	  // prints 24.567
console.log(decNum.toPrecision(2) );        	  // prints 25

console.log(Number.MAX_VALUE);        	  // prints 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        	  // prints 5e-324

















