const num = [3, 4];
console.log(num.length);            // prints 2
console.log(num[0]);                // prints 3
console.log(num);                   // prints [3, 4]

console.log('<----------->\n');

//add element at end of array
num.push(5,6);              
console.log(num);               // prints [3, 4, 5, 6]

console.log('<----------->\n');

//add element at begining of array
num.unshift(1,2);
console.log(num);               // prints [1, 2, 3, 4, 5, 6]

console.log('<----------->\n');

//add element at middle of array
num.splice(3, 0, 'a', 'b');             // 3 is element position after which it will add new elements and 0 is delete count
console.log(num);                       // prints [    1,   2, 3, 'a', 'b', 4, 5, 6]

console.log('<----------->\n');

// print all values of num array
for (const index in num) console.log(num[index]);           // prints 1 2 3 a b 4 5 6

console.log('<----------->\n');

//Or, 
for (const index of num) console.log(index);                // same output as above

console.log('<----------->\n'); 

//Or,
num.forEach((element) => console.log(element) );        // not required to define element variable

console.log('<----------->\n');     

// find elements in array (only primitive values):
const arr1 = [11,'john', 3, 1, 76];
console.log(arr1.indexOf(0) );                  // prints -1 as 0 is not available in the array
console.log(arr1.indexOf(1) );                  // prints 3 as 1 lies in 3rd position (index)
console.log(arr1.indexOf('John') );              // prints -1 as John is not there (it's actually case sensitive)
console.log(arr1.indexOf('tarzan  ') );         // prints -1
console.log(arr1.indexOf('john') );              // prints 1 as john is located in 1st position (index)

console.log(arr1.indexOf(76, 1) );               // prints 4 as 76 is in 4th position {it says look for 76 and start from 1st position]
console.log(arr1.indexOf(886, 1) );               // prints -1 as 886 is not available, checks from 1st position onwards

console.log(arr1.indexOf(887, arr1.indexOf(0) + 1) );       // prints -1 as it looks 887 from 1st position

// /returning true or false:
console.log(arr1.indexOf('john') !== 3) ;       // prints true as 1 is not equal to 3
console.log(arr1.indexOf('john') == 3) ;       // prints false as 1 is not equal to 3................old way

console.log('<----------->\n'); 

console.log(arr1.includes('john') );            // prints true...........new way 


console.log('<----------->\n'); 


// find elements in array (only reference values):
const courses = [
    {topicNo: 1, topicName: 'front-end automation'}, 
    {topicNo:2, topicName: 'api automation'}
];

console.log(courses.includes({topicNo: 1, topicName: 'front-end automation'})   );          // passing 1st object, prints false (this is wrong approach)

console.log('<----------->\n'); 

console.log(courses.find( (element) => {                                    // [Stylish Way]: writing a function using find function amd prints true
    return element.topicName === 'front-end automation';                    // prints { topicNo: 1, topicName: 'front-end automation' }
    })
);

console.log('<----------->\n'); 

console.log(courses.find( (element) => {                    // prints undefined as swades is not there in the course array
    return element.topicName === 'swades';
    }
  )
);

console.log('<----------->\n'); 

//Or, (another/old way of writing using function way)
const c1 = courses.find(function(element){
    return element.topicNo === 2;
    }
);
console.log(c1);

console.log('<----------->\n'); 

console.log(c1.topicName);              // prints topicname of 2nd object
console.log(c1.topicNo);                // prints topicno of 2nd object

console.log('<----------->\n'); 

// find index in an array (only reference values):
const c2 = courses.findIndex(function(element){
    return element.topicName === 'front-end automation';
    }
);

console.log(c2);                // prints 0 as 'front-end automation' is at 0th index








