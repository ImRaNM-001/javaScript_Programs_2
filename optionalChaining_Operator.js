// 1- first lets understand that 2 levels of undefined generates an error
let x = {};                 // empty object x
// console.log(x.profile.age);         // prints TypeError: Cannot read property 'age' of undefined as neither profile nor age is available in x object

console.log(x && x.profile && x.profile.name);              // this line means if x object exists and x has a property called profile and profile has a property called name, then execute this statement without error)........this print undefined instead of an error


x.profile = {};
console.log(x.profile);         // prints empty object {}

console.log(x && x.profile && x.profile.name);         // prints undefined as profile object is empty

x.profile.name = 'jack';
console.log(x && x.profile && x.profile.name);         // prints jack  as profile object has name property = jack


// 2- now cleaner code by Optional Chaining Operator (?.)
console.log(x ?. profile ?. name);                             // should have printed jack but as this is ES2020 syntax, so it won't work with current node js (hence try in future...for now block comment it)


/* let p ={};
console.log(p ?. profile ?. name); */               // now made an obj empty and run above lines of code


