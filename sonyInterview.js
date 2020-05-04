// Round2 (09-Apr-2020)::
// Qs 1. write code for array.map() fn
const orders123 = [
	{id:1, number: 20},
	{id:1, number: 30},
	{id:3, number: 40}
];

const od_1 = orders123.map(elem => elem.number*2);
console.log(od_1);                                          // prints [40, 60, 80] (i transformed elements of original array into entirely new array based on condition
  
// Qs 2. write code to explain for-each loop
const a1 = [2, 3, 'hi'];
a1.forEach(element => console.log(element) );           	// prints 2, 3, hi


// Qs 3. write code for array.reduce() fn
const od_2 = orders123.map(elem => elem.number)
		            .reduce( (a, b) => a + b);
console.log(od_2);                                  // prints 90


// Qs 4. write code for array.filter() fn
const od_3 = orders123.filter(elem => elem.id ===3);	
console.log(od_3);                                  // prints [{id: 3, number: 40 }]


// Round1 (06-Apr-2020)::
// Qs 1. for and for-each difference explained with example
const ar_y = [2,3];

for(let index = 1; index < ar_y.length; index++) console.log(ar_y[index]);      // prints 3
ar_y.forEach(elem => {
    if(elem > 2) console.log(elem);              // prints only  3
} );
    

// Qs 2. checking if condition to print a certain string
const ar_1 = ['a', 1, 3, 7, 6];

// way 1: most easy way
if(ar_1.includes(7) ) console.log('Hi I am xyz');          
else console.log('please enter correct data');              // please enter correct data

// way 2: using array and index (old way)
if(ar_1[3]==7) console.log('Hi I am xyz');              // prints Hi I am xyz
else console.log('please enter correct data');

// way 3: iterating via forEach loop (but since it is a loop it will print several statements)
ar_1.forEach(elem => {
    if(elem === 7) console.log('Hi I am xyz');    
    else console.log('please enter correct data'); 
} );                                    // prints please enter correct data please enter correct data   please enter correct data   Hi I am xyz     please enter correct data


// Qs 3. checking lose and strict equality
console.log(false == '0');                     // prints true as it checks false with 0 (where string datatype is ignored) 

// Qs 4. find out typeof of number and strings.
console.log(typeof 5+7+'90' );				// prints number790
console.log(typeof (5+7+'90') );			// prints string asked in sony interview

// using a fat arrow fn
const fn1 = (expr => typeof expr);
console.log(fn1( 5+7+'90') );               // prints string

// Qs 5. remove vowels from a given string
// option1: most easy way using regular expression
const s1 = 'Hi !!!!!! My Name Is cxxxx';
console.log(s1.trim()
            .replace(/[aeiou]/gi, '')
);

// option2: using a fat arrow function
const fny = (givenString => givenString.trim().replace(/[aeiou]/gi, '') );   // the regex i.e, /[aeiou]/gi, is simply replaced by empty string '' with no spaces....Note: The gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string.

console.log(fny (' Hi !!!!!! My Name Is cxxxx') );              // prints   H !!!!!! My Nm s cxxxx

// option3: converting to array and then doing it (bit tricky)
const givenString = ' Hi !!!!!! My Name Is cxxxx';


/* more ways of using .split() fn
// way 1
const arrString = givenString.trim().split(' ');          // this will trim given string and start the splitting where white space is identified first into 1 array element, hence basically a1 is now     ['Hi', '!!!!!!', 'My', 'Name', 'Is', 'cxxxx']

// way 2
const arrString = Array.from(givenString);          // this will start the splitting immediatedly (i.e, spilt each letter) into 1 array element as nothing is given inside quotes

console.log(givenString[0]);             // prints Hi

const arrString = givenString.trim().split();       // if signature of split() fn is empty it will convert entire string into 1 array element, hence arrString[0] will be    Hi !!!!!! My Name Is cxxxx                  */

// again writing for elegant finishup
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrString = givenString
            .trim()                                 // kills spaces before and after string
            .split('')                              // stirng becomes array as      ['Hi', '!!!!!!', 'My', 'Name', 'Is', 'cxxxx']
            .filter(elem => !vowels.includes(elem.toLowerCase() ) )         // array updates as ['H', '!!!!!!', 'My', 'Nm', 's', 'cxxxx']
            .join('');                                              // array gets converted back to string as    H !!!!!! My Nm s cxxxx

console.log(arrString);                     // prints  H !!!!!! My Nm s cxxxx


// Qs 6. map and filter fn (A Map doesn't have filter fn but an array does, explained in point7)
const m1 = new Map([ [2, 3], ['4', 5], [19, 'jack'] ]);

console.log(m1.size);           // prints 3 (as size of map m1 is 3)
console.log(m1.get(19) );       // prints 'jack' as i use m1.get(key) fn
console.log(m1.has(19) );       // prints true as map m1 has a key named 19

// Qs 7. an array is given, justify unshift, shift, push, pop, splice, slice, .includes, .indexOf
// .map, .reduce, .filter (prepared from The Codeholic video - Javascript .filter(), .map() and .reduce() on real world examples)
const crr = [1, 2, 3, 4, 5, 6, 7];

let drr = crr.filter(elem => elem % 2 === 0);      // array.filter() is used to create new array out of existing one by applying a certain condtion
console.log(drr);           // prints [2, 4, 6]

drr = crr.map(elem => elem % 2 === 0);        // array.map() is mainly use to form new array with entire new elements from the original array
console.log(drr);           // prints [false, true, false, true, false, true, false]

drr = crr.map(elem => elem * elem);
console.log(drr);               // prints [1, 4, 9, 16, 25, 36, 49]

const num = [1, 2, 4, 8];
const sum = num.reduce( (a, b) => a + b);       // array.reduce() is used to reduce all elements from original array into single element like producing sum of elements
console.log(sum);                               // prints 15

 drr = crr.filter(elem => elem % 2 === 0)
        .map(elem => elem * elem)
        .reduce( (a, b) => a + b);
console.log(drr);                               // prints 56

// what he said in the video 'a real world example' which is below
const orders = [
    {userId: 1, amount: 10},
    {userId: 1, amount: 15},
    {userId: 2, amount: 5},
    {userId: 2, amount: 100},
];

const ord_1_sum = orders.filter(od => od.userId === 1)
                    .map(od => od.amount)
                    .reduce( (a, b) => a + b);
console.log(ord_1_sum);                                         // prints 25 (which is nothing 10 + 15)
console.log('\n======================');


// asked by Sagar on interview for Shell Belandur automation role
let letter = 'x';
console.log(letter,'\n');
for(let row = 0; row < 3; row++){           // < 3 means it will print 3 lines of x starting from 0, 1, 2 that's it
	for(let col = 0; col < row;    col++){        
        letter+='x';
        console.log(letter);        
    }
}


