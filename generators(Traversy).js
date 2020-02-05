// Generators are nothing but functions which can be paused and resumed as many times user wants.
function *gen(){                                    // generator function must be started with *
    console.log('1st statement');
    yield 'Yield st1';                        
    console.log('2nd statement');
    yield 'Yield st2';          
    return 'Returned all values.';
}

// gen();          // simple calling the function won't print anything as yield has paused it, we need to store it in a variable and then call it nicely. However, if called as *gen(), it will throw error.

const g = gen();
// one way of printing
/* console.log(g.next().value);                // prints 1st statement Yield st1
console.log(g.next().value);                // prints 2nd statement Yield st2
console.log(g.next().value);  */                 // prints Returned all values.

console.log('another way of printing using for-of loop\n');

let val;
for(val of g) console.log(val);                 // prints same output as above except return value [Note: at a time only either of them will work as it is not an ordinary function]













