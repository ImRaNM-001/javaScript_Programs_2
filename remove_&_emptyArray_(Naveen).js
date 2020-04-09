const num = [3, 4, 8, 9, 11, 34];

// remove from end
const last = num.pop();
console.log('The last element deleted from array is: ' + last);      // prints 34 as 34 was the last element and now removed.
console.log(num);                     // prints [ 3, 4, 8, 9, 11 ]

// remove from beginning
const first = num.shift();
console.log('The first element deleted from array is: ' + first);           // prints 3 as was the first element and now removed.
console.log(num);                   // prints [ 4, 8, 9, 11 ]

// remove from middle
num.splice(1, 2);            // here we are telling the compiler from 1st index, remove 2 elements
console.log(num);           // prints [4, 11]

// how to empty array in 4 ways:
let num_1 = ['raja', 90, 220, 'sapney', true];

// 1- declare blank array
num_1 = [];
console.log(num_1);            // prints []

// 2- declare array.length as 0 (most recommended)
num_1.length = 0;
console.log(num_1);                 // prints []

// 3- using splice method
num_1.splice(0);
console.log(num_1);            // prints []

// 4- using pop method inside while loop (not recommended as performance is imapacted using this apparoach.....i noticed slowness in printing last console statement as the larger the array the longer the time)
while(num_1.length>0) num_1.pop();
console.log(num_1);            // prints []




















