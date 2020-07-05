// ex 1: simple example of object literal
const name = 'Diya',
age = 30,

person = {
    name,
    age
}

console.log(person.age);            // prints 30
console.log(person);                // prints { name: 'diya', age: 30 }


// ex 2: using spaces in object properties (i.e, in object keys) and using variables as a substitue for object properties
const ln = 'last name',

person1 = {
    'first name' : 'chang',      // using "white-spaces" in a object key..that's why written inside ' '
    [ln] : 'yashida'             // using a variable wrapped inside [] to represent a key
};

console.log(person1['first name']);             // prints chang
console.log(person1);                           // prints   {first name: "chang", last name: "yashida"}
console.log(person1[ln]);                       // prints yashida
console.log(person1['last name']);              // prints yashida