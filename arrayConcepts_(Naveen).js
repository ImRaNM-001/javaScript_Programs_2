const num = [3, 4];
console.log(num.length);            // prints 2
console.log(num[0]);                // prints 3
console.log(num);                   // prints [3, 4]
console.log('\n================');

const arr = [9, 'jai', ['r', 09] ];         // defining array inside an array (nested array)
console.log(arr[2] [1] );               // prints 9
console.log('\n================');

//add element at end of array
num.push(5, 6);              
console.log(num);               // prints [3, 4, 5, 6]
console.log('\n================');

//add element at begining of array
num.unshift(1,2);
console.log(num);               // prints [1, 2, 3, 4, 5, 6]
console.log('\n================');

//add element at middle of array
num.splice(3, 0, 'a', 'b');             // we are telling in 3rd index/position, don't remove any element and add 2 elements a & b.
console.log(num);                       // prints [ 1, 2, 3, 'a', 'b', 4, 5, 6]
console.log('\n================');


// print all values of num array
for(const index in num) console.log(num[index] );           // prints 1 2 3 a b 4 5 6
console.log('\n================');

//Or, 
for(const index of num) console.log(index);                // same output as above
console.log('\n================'); 

//Or,
num.forEach(element => console.log(element) );        // not required to define element variable
console.log('\n================');     

// find elements in array (only primitive values):
const arr1 = [11,'john', 3, 1, 76];
console.log(arr1.indexOf(0) );                  // prints -1 as 0 is not available in the array
console.log(arr1.indexOf(1) );                  // prints 3 as 1 lies in 3rd position (index)
console.log(arr1.indexOf('John') );              // prints -1 as John is not there (it's actually case sensitive)
console.log(arr1.indexOf('tarzan  ') );         // prints -1
console.log(arr1.indexOf('john') );              // prints 1 as john is located in 1st position (index)

console.log(arr1.indexOf(76, 1) );               // prints 4 as 76 is in 4th position {it says look for 76 and start from 1st position]
console.log(arr1.indexOf(886, 1) );               // prints -1 as 886 is not available, checks from 1st position onwards

console.log(arr1.indexOf(887, arr1.indexOf(0) + 1) );       // prints -1 as it looks 887 from 0th position
// Or, console.log(arr1.indexOf(887, 0);

// /returning true or false:
console.log(arr1.indexOf('john') !== 3) ;       // prints true as 1 is not equal to 3
console.log(arr1.indexOf('john') == 3) ;       // prints false as 1 is not equal to 3................old way
console.log('\n================'); 


console.log(arr1.includes('john') );            // prints true...........new way 
console.log('\n================');  


// find elements in array (only reference values):
const courses = [
    {topicNo: 1, topicName: 'front-end automation'}, 
    {topicNo: 2, topicName: 'api automation'}
];

console.log(courses.includes({topicNo: 1, topicName: 'front-end automation'})   );          // passing 1st object, prints false (this is wrong approach)
console.log('\n================'); 

// using find fn and storing in a variable c1 (ES5/old way):
const c1 = courses.find(element => element.topicName === 'front-end automation');
console.log(c1);                  // prints { topicNo: 1, topicName: 'front-end automation' } as we have used correct approach by using find method here
console.log('\n================'); 

//Or,  Stylish Way/ New way/ES6 way of writing fat arrow/lambda function and without storing in a variable c1 like we did above
console.log(courses.find(element => element.topicName === 'front-end automation') );       // prints { topicNo: 1, topicName: 'front-end automation' } 
console.log('\n================'); 


console.log(courses.find(element => element.topicName === 'swades') );               // prints undefined as swades is not there in the course array
console.log('\n================'); 

// again, for object 2
const c2 = courses.find(element => element.topicNo === 2) ;
console.log(c2);                                // prints { topicNo: 2, topicName: 'api automation' }
console.log('\n================'); 


console.log(c2.topicName);              // prints topicname of 2nd object i.e, api automation
console.log(c2.topicNo);                // prints topicno of 2nd object i.e, 2
console.log('\n================'); 

// find index in an array (only reference values), have used fat arrow function:
const c3 = courses.findIndex(element => element.topicName === 'front-end automation'); 
console.log(c3);                                       // prints 0 as 'front-end automation' is at 0th index

 
        





