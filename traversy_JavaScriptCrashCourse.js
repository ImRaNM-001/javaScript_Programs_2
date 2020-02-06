console.error('Mujhse shaadi karogi');      // prints Mujhse shaadi karogi
console.warn('Tujhse shaadi karogi');        // prints Tujhse shaadi karogi.....unlike Chrome console here in VsCode, it doesn't throw error or show a warning.

// String methods
const s = 'Hello!!'
console.log(s.length);         // prints 7
console.log(s.toUpperCase());      // prints HELLO!!

console.log(s.substring(0, 3));        // starting index 0 of string and ending at index 3....prints Hel
console.log(s.substring(0, 3).toLowerCase());          // prints hel

const s1 = 'captain, marvel, 2, release on, year2022';
console.log(s1.split(', '));                    // prints [ 'captain', 'marvel', '2', 'release on', 'year2022' ]..NOTE: , is important to split into arrays

// Array methods
const fruits = ['oranges', 'pineapple', 'melon', 'dates'];
console.log(Array.isArray(fruits));            // prints true
console.log(fruits.indexOf('dates'));      // prints 3 as dates is at 3rd index

// Object Literals (which are basically key value pairs)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['movies', 'music', 'masti'],
    address: {
        street: '50 main street',
        city: 'boston',
        state: 'MA'
    }
};
console.log(person.lastName);       // prints Doe
console.log(person.firstName, person.age);          // prints John 30

console.log(person.hobbies[2]);                    // prints masti
console.log(person.address.street);                 // prints 50 main street

// Destructuring object propertynames/keys as below
// const {firstName, lastName} = person;
// console.log(firstName, lastName);               // prints John Doe

const { firstName, lastName, address: { city, state } } = person;
console.log(city);                                          // prints boston
console.log(state);             // prints MA

// object inside arrays
const todos = [
    {
        id: 1,
        text: 'read emails',
        isCompleted: false,
    },

    {
        id: 2,
        text: 'write code',
        isCompleted: false,
    },

    {
        id: 3,
        text: 'attend calls',
        isCompleted: true,
    }
];
console.log(todos[1].text);             // prints write code
console.log(todos[2].isCompleted);      // prints true

// convert to Json String so to send data to server (may ask in interview, hence be prepared)
const todoJson = JSON.stringify(todos);
console.log(todoJson);              // prints [{"id":1,"text":"read emails","isCompleted":false},{"id":2,"text":"write code","isCompleted":false},{"id":3,"text":"attend calls","isCompleted":true}]

let whI = 0;            // deliberately let has to be used. if const keyword is used will throw error TypeError: Assignment to constant variable.
while (whI < 6) {
    console.log(`While loop number: ${whI}`);           // While loop number: 0    While loop number: 1    While loop number: 2    While loop umber: 3    While loop number: 4    While loop number: 5
    whI++;
}

// for loop to print text and id of todos array
for (let index of todos) console.log(index);        // prints all index...{ id: 1, text: 'read emails', isCompleted: false } { id: 2, text: write code', isCompleted: false } { id: 3, text: 'attend calls', isCompleted: true }

for (let index of todos) console.log(todos);             // prints the entire array with [ ................]
for (let index of todos) console.log(index.text);       // prints read emails write code attend calls
for (let index of todos) console.log(index.id);         // prints 1 2 3

// High Order Array functions - forEach, map, filter
todos.forEach( (index) => console.log(index.text) );          // prints read emails write code attend calls

// map
const todosText = todos.map((index) => {
    return index.text;
}
);
console.log(todosText);                 // prints [ 'read emails', 'write code', 'attend calls' ]


// filter
const todosCompl = todos.filter( (index) => {
    return index.isCompleted === true;
}
);
console.log(todosCompl);                 // prints [ { id: 3, text: 'attend calls', isCompleted: true } ]


// use map & filter together
const todosCompl1 = todos.filter((index) => {
    return index.isCompleted === true;
}
).map((index) => {
    return index.text;
}
);
console.log(todosCompl1);               // prints [ 'attend calls' ]

// ternary operator
const x = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color);                          // prints red

// default parameters
// const addNums = (num1 = 1, num2 = 13) => console.log(num1 + num2) ;         // Lessons Learnt when using fat arrow function, always store in a variable preferrably using const keyword, also don't use console.log in function instead return it without using return keyword


// const addNums = (num1 = 1, num2 = 13) => { return (num1 + num2) };          // if return is used, { } are must so that return color is red, avoid return keyword

const addNums = (num1 = 1, num2 = 13) => num1 + num2;   
console.log(addNums() );            // prints 14 but if arguments are given inside the function then

console.log(addNums(5, 44) );       // prints 49 by ignoring the default parameters

// if 1 parameter is there no need of paranthesis
const addNums1 = num1 => num1+90;            // paranthesis must be used if default parameters are assigned
console.log(addNums1 (5) );                   // prints 95


// constructor function with prototype keyword [ES5 way]
function Person(fName, lName, dOB){
    this.fName = fName;
    this.lName = lName;
    this.dOB = new Date(dOB);
}

// Person.prototype.getBirthYear = () => this.dOB.getFullYear();        // as oppose to Brad Traversy i pushed myself and wrote 1 liner fat arrow function

// Person.prototype.getFullName = () => `${this.fName} ${this.lName}`;

Person.prototype.getBirthYear = function(){
    return this.dOB.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.fName} ${this.lName}`;
}

// instantiate Person object into 2 new persons
const per1 = new Person('Jack', 'Bawer', '4-3-1985');
const per2 = new Person('Jill', 'Bawer', '8-07-1987');

console.log(per2.dOB);                  // prints 1987-08-06T18:30:00.000Z

console.log(per1.getBirthYear() );             // prints 1985 
console.log(per2.getFullName() );           // prints Jill Bawer


// classes [ES6 way]
class Person1{
    constructor(fName, lName, dOB){
        this.fName = fName;
        this.lName = lName;
        this.dOB = new Date(dOB)
    }

    getBirthYear(){
        return this.dOB.getFullYear();
    }

    getFullName(){
        return `${this.fName} ${this.lName}`;
    }
}
    const per3 = new Person1('Billy', 'Jacob', '5-7-1979');
    const per4 = new Person1('Mary', 'Jacob', '12-4-1991');  

    console.log(per3.getBirthYear() );                  // prits 1979
    console.log(per4.getFullName() );                   // prints Mary Jacob













