// part 1: only variables
a = 5;
console.log(a);
var a;                      // will not throw error

b = 6;
console.log(b);
// let b;                      // should throw "uncaught reference error: cannot access a before initialization"

c = 7;
console.log(c);
// const c;                    // should throw "uncaught syntax error: missing initializer in const declration"


// part 2: playing with fns()
var y1 = 50;
var fn1 = () => {                   // or, can also be written as function fn1(){..............}
    if(true){
        var x1 = 10;
        console.log(x1);         // prints 10 when fn1 called
        console.log(y1);         // prints 50 when fn1 called
    }
    console.log(x1);             // prints 10 when fn1 called
    console.log(y1);             // prints 50 when fn1 called
}
// console.log(x1);                 // prints ReferenceError: x1 is not defined
console.log(y1);                 // prints 50
fn1();
 

let y2 = 150;
let fn2 = () => {                   // or, can also be written as function fn1(){..............}
    if(true){
        let x2 = 110;
        console.log(x2);         // prints 110 when fn1 called
        console.log(y2);         // prints 150 when fn1 called
    }
    // console.log(x2);            // prints ReferenceError: x2 is not defined
    console.log(y2);             // prints 150 when fn1 called
}
// console.log(x2);                 // prints ReferenceError: x2 is not defined
console.log(y2);                 // prints 150
fn2();


const y3 = 1500;
const fn3 = () => {                   // or, can also be written as function fn1(){..............}
    if(true){
        const x3 = 1100;
        console.log(x3);         // prints 1100 when fn1 called
        console.log(y3);         // prints 1500 when fn1 called
    }
    // console.log(x3);            // ReferenceError: x3 is not defined
    console.log(y3);             // prints 1500 when fn1 called
}
// console.log(x3);                 // prints ReferenceError: x3 is not defined
console.log(y3);                 // prints 1500
fn3();









