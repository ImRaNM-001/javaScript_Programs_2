// ex 1:
const a1 = [4, 5, 6];
const set1 = new Set(a1);

console.log(a1[0]);                     // prints 4
console.log(set1[0]);                  // prints undefined....hence print 1st value via next line

console.log(set1.values().next().value );       // prints 1st value i.e, 4

// ex 2:
const set2 = new Set([8,9]);
const b2 = Array.from(set2);

console.log(set2);                          // print {8,9}
console.log(b2);                            // print [8,9]


// ex 3:
const c3 = Array.from('123');
console.log(c3);                        // print ['1', '2', '3']

// ex 4:
const arr1 = new Array(10);
console.log(arr1[0]);                   // prints undefined (i need to understand why)
console.log(arr1.length);               // prints 10

const brr1 = [20];
console.log(brr1[0]);                   // prints 20
console.log(brr1.length);               // prints 1

const crr1 = new Array(23,47,63);          
console.log(crr1[2]);                   // prints 63
console.log(crr1);                      // prints [23, 47, 63]


// ex 4: using nested array and inserting via push() fn
let d4 = new Array();
d4.push(3, 'dilabr' );
console.log(d4);                                     // prints [ 3, 'dilabr' ]

d4.push(new Array (44, 'saajn' ) );
console.log(d4);                                    // prints [ 3, 'dilabr', [ 44, 'saajn' ] ]


// ex 5: dumping (assigning) 1 array into another directly
const e1 = [1,2,3];
const f1 = e1;
console.log(f1);                // prints [1,2,3]






















