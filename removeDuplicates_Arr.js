const a1 = new Array(8, 9, 8, 5, 20, 5, 'Hijack');

// a1.forEach(elem => console.log(elem) );     // prints each element but in vertical lines
console.log('Printing values of a1 array: ', a1);           // prints [8, 9, 8, 5, 20, 5, 'Hijack']

// Removing duplicates via:
// 1. spread operator and set (MOST EASY way)
console.log('1st way which is the most easiest way: ');
console.log([...new Set(a1)] );                                 // prints [8, 9, 5, 20, 'Hijack']

            
// 2. for loop and another array 'b1'
let b1 = [];
let _index, len = a1.length;                                // _index : another style of writing a variable i.e, starting with _

for(_index = 0;  _index < len;    _index++){
    if(b1.indexOf(a1[_index]) === -1) b1.push(a1[_index]);
}
console.log('2nd way using traditional for loop: ');
console.log(b1);                                                                     // prints [ 8, 9, 5, 20, 'Hijack' ]

// 3. using for of loop and Object.keys fn
let obj = {}, value;

for(value of a1) obj[value] = true;
console.log('3rd way using for of and Object.keys fn: ' + Object.keys(obj) );                     // prints [ '5', '8', '9', '20', 'Hijack' ]








