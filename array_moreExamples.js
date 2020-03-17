// ex 1: converting array to set and printing individual values
const a1 = [4, 5, 6];
const set1 = new Set(a1);

console.log(a1[0]);                     // prints 4
console.log(set1[0]);                  // prints undefined....hence print 1st value via next line

console.log(set1.values().next().value );       // prints 1st value i.e, 4


// ex 2: converting set to array and printing individual values
const set2 = new Set([8,9]);
const b2 = Array.from(set2);

console.log(set2);                          // print {8,9}
console.log(b2);                            // print [8,9]


// ex 3: creating array from a simple string consisting of numbers
const c3 = Array.from('123');
console.log(c3);                        // print ['1', '2', '3']


// ex 4: setting custom array length and printing it
const arr1 = new Array(10);             // setting arr1 length as 10 (means it will take total of 10 elements)
console.log(arr1[0]);                   // prints undefined as i defined the length
console.log(arr1.length);               // prints 10

const brr1 = [20];                      // inserted 1 element into brr1 array and not the length
console.log(brr1[0]);                   // prints 20
console.log(brr1.length);               // prints 1

const crr1 = new Array(23,47,63);       // here again elements are inserted and not length as array consists of mutiple elements in signature
console.log(crr1[2]);                   // prints 63
console.log(crr1);                      // prints [23, 47, 63]


// ex 5: using nested array and inserting via push() fn
let d4 = new Array();
d4.push(3, 'dilabr' );
console.log(d4);                                     // prints [ 3, 'dilabr' ]

d4.push(new Array (44, 'saajn' ) );
console.log(d4);                                    // prints [ 3, 'dilabr', [ 44, 'saajn' ] ]


// ex 6: dumping (assigning) 1 array into another directly
const e1 = [1,2,3];
const f1 = e1;
console.log(f1);                // prints [1,2,3] 

// // ex 7: setting invalid array length
// const arrName = new Array(4294967296);      //2 ^ 32nd power = 4294967296 
// const brrName = new Array(-100);              // negative sign

// console.log(arrName);                   // prints RangeError: Invalid array length
// console.log(brrName);                   // prints RangeError: Invalid array length


// ex 8: multiplying each elements of array
const tdArr = [2, 9, 6, 11];
let index, len = tdArr.length;
for(index = 0;  index < len;    index++){
    tdArr[index] *= 2;
} 
console.log(tdArr);                 // prints [ 4, 18, 12, 22 ]
 













